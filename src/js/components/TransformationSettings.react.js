/**
 * Copyright 2017-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

const React = require('react');

import { Icon } from 'semantic-ui-react';
import SettingsActions from '../data/SettingsActions';

import type { Props } from '../containers/AppContainer.react';

class TransformationSettings extends React.Component<Props> {
  handleAudienceNetworkPlacementIdChanged = (
    event: SyntheticEvent<HTMLInputElement>
  ) => {
    SettingsActions.editAudienceNetworkPlacementId(event.currentTarget.value);
  };

  handleFbPixelIdChanged = (event: SyntheticEvent<HTMLInputElement>) => {
    SettingsActions.editFbPixelId(event.currentTarget.value);
  };

  handleStyleNameChanged = (event: SyntheticEvent<HTMLInputElement>) => {
    SettingsActions.editStyleName(event.currentTarget.value);
  };

  render() {
    return (
      <div className="settings">
        <label>
          <Icon name="settings" />Settings:
        </label>
        <div className="settings-fields">
          <div className="general-settings field-line">
            <label>
              <Icon name="edit" />General
            </label>
            <label className="sub-label" htmlFor="styleName">
              <span>•</span>&nbsp; Style Name
            </label>
            <div className="field">
              <input
                type="text"
                name="styleName"
                placeholder="default"
                data-settings-field="styleName"
                onChange={this.handleStyleNameChanged}
              />
            </div>
          </div>
          <div className="analytics-settings field-line">
            <label>
              <Icon name="bar chart" />Analytics
            </label>
            <label className="sub-label" htmlFor="pixelId">
              <span>•</span>&nbsp; Pixel ID
            </label>
            <div className="field">
              <input
                type="text"
                name="pixelId"
                placeholder="123456"
                data-settings-field="fbPixelId"
                onChange={this.handleFbPixelIdChanged}
              />
            </div>
          </div>
          <div className="ads-settigns field-line">
            <label>
              <Icon name="money" />Ads
            </label>
            <label className="sub-label" htmlFor="audienceNetworkId">
              <span>•</span>&nbsp; Audience Network ID
            </label>
            <div className="field">
              <input
                type="text"
                name="audienceNetworkId"
                placeholder="123456"
                data-settings-field="audienceNetworkPlacementId"
                onChange={this.handleAudienceNetworkPlacementIdChanged}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = TransformationSettings;
