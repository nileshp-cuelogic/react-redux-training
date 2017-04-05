import React from 'react';
import 'jsdom-global/register';
import { expect, assert } from 'chai';
import { mount, shallow } from 'enzyme';
import { LoginComponent } from '../../src/app/components/Login'

describe('Login Component Testing', () => {
    it('Check total input controls', () => {
        const wrapper = mount(<LoginComponent />);
        //expect(wrapper.find('input'),"Invalid inputs found").to.have.length(3);
        assert.equal(2, wrapper.find('input').length, "Invalid inputs found");
        assert.equal(1, wrapper.find('input[id="username"]').length, "input control for username is not found");
        assert.equal(1, wrapper.find('input[id="password"]').length, "input control for password is not found");
        
    });

    it('render without exploading', () => {
        const wrapper = shallow(<LoginComponent />);
        expect(wrapper).to.have.length(1);
    });

    it('Count Buttons', () => {
        const wrapper = shallow(<LoginComponent />);
        assert.equal(1, wrapper.find('button').length, "Invalid buttons found");
    });
});
