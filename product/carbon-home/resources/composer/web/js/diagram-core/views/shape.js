/**
 * Copyright (c) 2016, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
define(['lodash', './element'], function (_, DiagramElementView) {


    var ShapeView = DiagramElementView.extend(
        /** @lends ShapeView.prototype */
        {
            /**
             * @augments DiagramElementView.View
             * @constructs
             * @class ShapeView Represents the view for shapes in a diagram.
             * @param {Object} options Rendering options for the view
             */
            initialize: function (options) {
                DiagramElementView.prototype.initialize.call(this, options);
            },

            render: function (paperID) {
                DiagramElementView.prototype.render.call(this, paperID);
                this.model.on("connectionPointAdded", this.onConnectionPointAdded, this);
            },

            onConnectionPointAdded: function (connectionPoint) {
            }
        }
    );

    return ShapeView;
});

