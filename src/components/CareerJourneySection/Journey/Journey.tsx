import React, { useMemo, Children, cloneElement } from 'react';
import styles from './Journey.module.scss';
import clsx from 'clsx';
import { JourneyItem } from './JourneyItem';

type JourneyItemProps = React.ComponentProps<typeof JourneyItem>;

type JourneyItemElement = React.ReactElement<JourneyItemProps>;

type JourneyProps = {
  children: JourneyItemElement | JourneyItemElement[];
};

type SubComponents = {
  Item: typeof JourneyItem;
  Description: typeof JourneyItem.Description;
};

export const Journey: React.FC<JourneyProps> &
SubComponents = ({
  children,
}) => {
  const lastIndex = useMemo(() => {
    return Children.count(children) - 1;
  }, []);
  
  return (
    <div className={clsx(styles.journey)}>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          lastItem: index === lastIndex,
        })
      )}
    </div>
  );
};

Journey.Item = JourneyItem;
Journey.Description = JourneyItem.Description;
