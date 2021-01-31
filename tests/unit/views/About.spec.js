import { shallowMount } from '@vue/test-utils'
import PageAbout from '@/views/About.vue'

describe('About.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'This is an about page'
    const wrapper = shallowMount(PageAbout)
    expect(wrapper.text()).toMatch(msg)
  })
})
