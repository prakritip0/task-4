import React from 'react';
import { ChangeEvent } from 'react';

export interface ButtonPropsType extends React.ComponentPropsWithoutRef<'button'> {
  label: string;
}
export interface CheckboxPropsType extends React.ComponentPropsWithoutRef<'input'> {
  label: string;
}
export interface ErrPropsType {
  err: string;
}
export interface DatePropsType {
  label: string;
  id: string;
  value: string | null;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  err?: string;
  onBlur?: () => void;
}
export interface InputPropsType extends React.ComponentPropsWithoutRef<'input'> {
  label?: string;
  type: 'text' | 'email' | 'number' | 'textarea';
  err: string;
}

export interface LabelPropsType extends React.ComponentPropsWithoutRef<'label'> {
  label?: string;
}
export interface SelectPropsType extends React.ComponentPropsWithoutRef<'select'> {
  options: { value: string; label: string }[];
  placeholder: string;
  err: string;
  onBlur: () => void;
  label: string;
}
export interface TagPropsType {
  tags: string[];
  removeTag: (i: number) => void;
}
export interface StepGuideProps {
  signupStep: number;
  firstStepComplete: boolean;
  secondStepComplete: boolean;
  thirdStepComplete: boolean;
  finalStepComplete: boolean;
}
export interface AvatarProps {
  src: string;
}

export interface userDetailsType {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  dateOfBirth: string;
  skill: string;
  formalDegree: string;
  degreeName: string;
  skillTags: string[];
  companyName: string;
  years: number;
  position: string;
  role: string;
  startDate: string;
  endDate: string;
  experiences: {
    position: string;
    companyName: string;
    years: number;
  }[];
  noExperience: boolean;
  jobPreferences: string[];
  salaryLowerLimit: string;
  salaryUpperLimit: string;
  imageURL: string;
  resumeFileName: string;
  agreed: boolean;
  firstStepComplete: boolean;
  secondStepComplete: boolean;
  thirdStepComplete: boolean;
  finalStepComplete: boolean;
}
