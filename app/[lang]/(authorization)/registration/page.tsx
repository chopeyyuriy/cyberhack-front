"use client";

import { AuthHeading, Steps } from "@/shared";

import "./styles.scss";

import { NicknameForm, RegistrationForm } from "@/features/Authorization";
import { AuthorizationWithoutSteps } from "@/widgets/Authorization";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslations } from "next-intl";

enum DEFAULT_REGISTRATION_STEPS {
  FORM,
  NICKNAME_AND_SKIN,
}

export default function RegistrationPage() {
  const t = useTranslations('register');

  const [currentStep, setCurrentStep] = useState<DEFAULT_REGISTRATION_STEPS>(
    DEFAULT_REGISTRATION_STEPS.FORM,
  );

  const nextStep = () => {
    setCurrentStep(DEFAULT_REGISTRATION_STEPS.NICKNAME_AND_SKIN);
  };

  return (
    <AuthorizationWithoutSteps>
      <Steps currentStep={currentStep + 1} total={2} className="mb-3" />
      <AuthHeading
        title={t('title')}
        subtitle={t('text')}
        href="/login"
        hrefText={t('auth')}
      />
      {currentStep === DEFAULT_REGISTRATION_STEPS.FORM ? (
        <RegistrationForm nextStep={nextStep} />
      ) : (
        <NicknameForm />
      )}
    </AuthorizationWithoutSteps>
  );
}
