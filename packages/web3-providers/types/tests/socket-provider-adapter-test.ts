/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file socket-provider-adapter-test.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>
 * @date 2018
 */

import {SocketProviderAdapter, HttpProvider} from 'web3-providers';

const options = {
    timeout: 20000,
    headers: [
        {
            name: 'Access-Control-Allow-Origin', value: '*'
        }
    ]
};
const httpProvider = new HttpProvider('http://localhost:8545', options);
const sockerProvider = new SocketProviderAdapter(httpProvider);

// $ExpectType Promise<string>
sockerProvider.subscribe('type', 'method', [123]);

// $ExpectType boolean
sockerProvider.isConnected();

// $ExpectType Promise<boolean>
sockerProvider.unsubscribe('3', 'type');

// $ExpectType void
sockerProvider.registerSubscriptionListener();

// $ExpectType boolean
sockerProvider.hasSubscription('4');

// $ExpectType void
sockerProvider.clearSubscriptions();

// $ExpectType Promise<boolean>
sockerProvider.removeSubscription('3', 'type');