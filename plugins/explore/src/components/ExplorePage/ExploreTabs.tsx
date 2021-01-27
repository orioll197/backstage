/*
 * Copyright 2021 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Tabs } from '@backstage/core';
import { makeStyles } from '@material-ui/core';
import React from 'react';
import { DomainExplorerContent } from '../DomainExplorerContent';
import { ToolExplorerContent } from '../ToolExplorerContent';

// TODO: Support sub routes for these tabs in the future

const useStyles = makeStyles({
  layout: {
    gridArea: 'pageContent',
  },
});

export const ExploreTabs = () => {
  const classes = useStyles();

  return (
    <div className={classes.layout}>
      <Tabs
        tabs={[
          {
            label: `Domains`,
            content: <DomainExplorerContent />,
          },
          {
            label: `Tools`,
            content: <ToolExplorerContent />,
          },
        ]}
      />
    </div>
  );
};
