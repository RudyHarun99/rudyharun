import React from 'react';
import { CoreSkill } from './CoreSkill';
import { AnimationGroup } from './CoreSkill/AnimationGroup';
import { SkillGroup } from './CoreSkill/SkillGroup';
import { Section } from '../Section';
import { skills } from '@/constants/skills';

export const CoreSkillSection: React.FC = () => {
  return (
    <Section
      title='My Core Skills'
      subtitle='An overview of the key technologies and frameworks I specialize in'
      id='skills'
    >
      <CoreSkill>
        <CoreSkill.AnimationGroup>
          <AnimationGroup.Item />
        </CoreSkill.AnimationGroup>
        <CoreSkill.SkillGroup>
          {skills.map((skill) => (
            <SkillGroup.Item
              key={skill.title}
              title={skill.title}
              proficiency={skill.proficiency}
            />
          ))}
        </CoreSkill.SkillGroup>
      </CoreSkill>
    </Section>
  );
};
