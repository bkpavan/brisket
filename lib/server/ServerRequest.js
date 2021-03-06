"use strict";

var ServerRequest = {

    from: function(expressRequest, environmentConfig) {
        environmentConfig = environmentConfig || {};
        var rawQuery = getRawQuery(expressRequest.originalUrl);
        var appRoot = environmentConfig.appRoot || "";

        return {
            host: expressRequest.headers.host,
            path: appRoot + expressRequest.path,
            protocol: expressRequest.protocol,
            query: expressRequest.query,
            rawQuery: rawQuery,
            referrer: expressRequest.headers["referer"],
            userAgent: expressRequest.headers["user-agent"],
            isFirstRequest: true,
            requestId: 1,
            isNotClick: false,
            environmentConfig: environmentConfig
        };
    }
};

function getRawQuery(originalUrl) {

    if (typeof originalUrl !== "string") {
        return null;
    }

    return originalUrl.split("?")[1] || null;
}

module.exports = ServerRequest;

// ----------------------------------------------------------------------------
// Copyright (C) 2015 Bloomberg Finance L.P.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ----------------------------- END-OF-FILE ----------------------------------
