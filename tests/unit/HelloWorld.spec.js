import HelloWorld from "@/components/HelloWorld.vue";
import { shallowMount } from "@vue/test-utils";

describe('HelloWorld.vue', () => {
    it('Should display props message ', () => {
        const msg = "mon super message";
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg },
        });
        
        expect(wrapper.text()).toMatch(msg);
    });
});
