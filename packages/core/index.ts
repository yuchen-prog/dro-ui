import { makeInstaller } from '@dro-ui/utils'

import components from './component'
import '@dro-ui/theme/index.css'

const installer = makeInstaller(components);

export * from '@dro-ui/components'
export default installer;