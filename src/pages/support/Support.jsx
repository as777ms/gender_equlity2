// /*************  ✨ Codeium Command 🌟  *************/
import { useTranslation } from 'react-i18next'

import { motion } from 'framer-motion'
import React from 'react'
import Footers from '../../components/footers/Footers'

const variants = {
  initial: { opacity: 0, y: 50 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: 50, transition: { duration: 0.5 } },
}

const Support = () => {
  const { t } = useTranslation()

  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <div className="flex flex-col items-center p-12">
        <h1 className="text-4xl font-bold mb-4" key={t('title')}>
          {t('title')}
        </h1>
        <p className="text-lg mb-8" key={t('paragraph1')}>
          {t('paragraph1')}
        </p>
        <p className="text-lg mb-8" key={t('paragraph2')}>
          {t('paragraph2')}
        </p>
        <p className="text-lg mb-8" key={t('paragraph3')}>
          {t('paragraph3')}
       </p>
        <p className="text-lg mb-8" key={t('paragraph4')}>
          {t('paragraph4')}
        </p>
        <p className="text-lg mb-8" key={t('paragraph5')}>
          {t('paragraph5')}
       </p>
      </div>
      <Footers />
    </motion.div>
  )
}

export default Support
/******  51d58166-79e5-44e5-9244-ceb0ccf42083  *******/