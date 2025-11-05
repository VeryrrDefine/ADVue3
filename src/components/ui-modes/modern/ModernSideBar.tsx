import { defineComponent } from 'vue'
import ModernSideBarCurrency from './ModernSideBarCurrency'
import ModernTabButton from './ModernTabButton'

export default defineComponent({
    name: 'ModernSideBar',
    setup(props, ctx) {
        return () => (
            <>
                <div class="c-modern-sidebar">
                    {' '}
                    <ModernSideBarCurrency />
                    <ModernTabButton />
                </div>
            </>
        )
    },
})
