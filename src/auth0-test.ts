import { expect } from 'chai'
import 'mocha'

import {
    Auth0ClientConfig,
    Auth0ServerConfig,
    serverToClient
} from './auth0'


describe('serverToClient', () => {
    it('should transform', () => {
        const auth0ServerConfig: Auth0ServerConfig = {
            clientId: 'foo',
            clientSecret: 'bar',
            domain: 'foo.com',
            loginCallbackUri: 'foo.com/callback'
        };

        const auth0ClientConfig: Auth0ClientConfig = {
            clientId: 'foo',
            domain: 'foo.com',
            loginCallbackUri: 'foo.com/callback'
        };

        expect(serverToClient(auth0ServerConfig)).to.eql(auth0ClientConfig);
    });
});
