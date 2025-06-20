import Header from '../../components/Header'
import { useLocation, useOutlet } from 'react-router'
import { AnimatePresence, motion } from 'framer-motion'

const Default = () => {
  const outlet = useOutlet()
  const location = useLocation()
  return (
    <>
      <Header />
      <AnimatePresence>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, position: 'absolute', x: -300 }}
          transition={{ duration: 2 }}>
          {outlet}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Default
