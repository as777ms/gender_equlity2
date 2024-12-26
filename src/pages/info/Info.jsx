import React from 'react';
import { useTranslation } from 'react-i18next';

const Info = ({ support }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="max-w-12xl mx-auto p-6 bg-gradient-to-r from-indigo-200 via-blue-100 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800">{t('aboutWebsite')}</h1>
        <p className="text-lg mb-6 leading-relaxed">
          {t('togetherAgainstViolence')}
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4 text-indigo-700">{t('genderBasedViolence')}</h2>
        <h3 className="text-2xl font-semibold mb-2">{t('theReality')}</h3>
        <p className="mb-4 text-gray-700">
          {t('realityDescription')}
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>{t('fearOfStigma')}</li>
          <li>{t('limitedAccess')}</li>
          <li>{t('lackOfAwareness')}</li>
        </ul>

        <h3 className="text-2xl font-semibold mb-2 text-indigo-700">{t('theNumbers')}</h3>
        <p className="mb-6 text-gray-700">
          {t('numbersDescription')}
        </p>

        <h3 className="text-2xl font-semibold mb-2 text-indigo-700">{t('ourResponse')}</h3>
        <p className="mb-4 text-gray-700">
          {t('responseDescription')}
        </p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>{t('providingSupport')}</li>
          <li>{t('raisingAwareness')}</li>
          <li>{t('offeringResources')}</li>
        </ul>

        <div className="mb-8">
          <img
            src={support}
            alt={t('genderBasedViolence')}
            className="rounded-lg shadow-xl w-full h-auto"
          />
        </div>

        <h2 className="text-3xl font-semibold mt-8 mb-4 text-indigo-700">{t('howWebsiteWorks')}</h2>
        <h3 className="text-2xl font-semibold mb-2 text-indigo-700">{t('getSupport')}</h3>
        <p className="mb-4 text-gray-700">{t('getSupportDescription')}</p>
        <h3 className="text-2xl font-semibold mb-2 text-indigo-700">{t('stayInformed')}</h3>
        <p className="mb-4 text-gray-700">{t('stayInformedDescription')}</p>
        <h3 className="text-2xl font-semibold mb-2 text-indigo-700">{t('joinMovement')}</h3>
        <p className="mb-4 text-gray-700">{t('joinMovementDescription')}</p>

        <h2 className="text-3xl font-semibold mt-8 mb-4 text-indigo-700">{t('whyFocusTajikistan')}</h2>
        <p className="mb-4 text-gray-700">
          {t('culturalContext')}
        </p>
        <p className="mb-4 text-gray-700">
          {t('ruralChallenges')}
        </p>
        <p className="mb-4 text-gray-700">
          {t('advocatingChange')}
        </p>

        <h2 className="text-3xl font-semibold mt-8 mb-4 text-indigo-700">{t('keyFeatures')}</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>{t('anonymousSupport')}</li>
          <li>{t('comprehensiveResources')}</li>
          <li>{t('educationalContent')}</li>
          <li>{t('communityStories')}</li>
          <li>{t('legalGuidance')}</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4 text-indigo-700">{t('ourMission')}</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>{t('empowerSurvivors')}</li>
          <li>{t('raiseAwareness')}</li>
          <li>{t('promoteLegalAction')}</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4 text-indigo-700">{t('didYouKnow')}</h2>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>{t('ngosSupport')}</li>
          <li>{t('governmentSteps')}</li>
          <li>{t('unreportedCases')}</li>
        </ul>

        <h2 className="text-3xl font-semibold mt-8 mb-4 text-indigo-700">{t('createChange')}</h2>
        <p className="mb-6 text-gray-700">
          {t('createChangeDescription')}
        </p>
      </div>
    </>
  );
};

export default Info;