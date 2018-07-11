import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Login from '@/components/Login'
import sinon from 'sinon'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Test Login component', () => {
  let store
  let actions

  it('should call LOGIN action with params when submit', () => {
    actions = {
      login: jest.fn()
    }

    store = new Vuex.Store({
      actions
    })

    const wrapper = shallowMount(Login, {
      store,
      localVue
    })

    wrapper.find('#inputEmail').setValue('testUsername')
    wrapper.find('#inputPassword').setValue('testPassword')

    wrapper.find('form').trigger('submit')

    expect(actions.login.mock.calls).toHaveLength(1)
    expect(actions.login.mock.calls[0][1]).toEqual({ email: 'testUsername', password: 'testPassword' })
  })

  it('should show error message when login fail', (done) => {
    actions = {
      login: sinon.stub()
    }

    store = new Vuex.Store({
      actions
    })

    const wrapper = shallowMount(Login, {
      store,
      localVue
    })

    wrapper.find('form').trigger('submit')

    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.message').text()).toBe('Login failed')
      done()
    })

    actions.login.rejects()
  })
})
