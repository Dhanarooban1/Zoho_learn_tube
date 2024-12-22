/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@google/generative-ai/dist/index.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@google/generative-ai/dist/index.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockReason: () => (/* binding */ BlockReason),
/* harmony export */   ChatSession: () => (/* binding */ ChatSession),
/* harmony export */   DynamicRetrievalMode: () => (/* binding */ DynamicRetrievalMode),
/* harmony export */   ExecutableCodeLanguage: () => (/* binding */ ExecutableCodeLanguage),
/* harmony export */   FinishReason: () => (/* binding */ FinishReason),
/* harmony export */   FunctionCallingMode: () => (/* binding */ FunctionCallingMode),
/* harmony export */   GenerativeModel: () => (/* binding */ GenerativeModel),
/* harmony export */   GoogleGenerativeAI: () => (/* binding */ GoogleGenerativeAI),
/* harmony export */   GoogleGenerativeAIError: () => (/* binding */ GoogleGenerativeAIError),
/* harmony export */   GoogleGenerativeAIFetchError: () => (/* binding */ GoogleGenerativeAIFetchError),
/* harmony export */   GoogleGenerativeAIRequestInputError: () => (/* binding */ GoogleGenerativeAIRequestInputError),
/* harmony export */   GoogleGenerativeAIResponseError: () => (/* binding */ GoogleGenerativeAIResponseError),
/* harmony export */   HarmBlockThreshold: () => (/* binding */ HarmBlockThreshold),
/* harmony export */   HarmCategory: () => (/* binding */ HarmCategory),
/* harmony export */   HarmProbability: () => (/* binding */ HarmProbability),
/* harmony export */   Outcome: () => (/* binding */ Outcome),
/* harmony export */   POSSIBLE_ROLES: () => (/* binding */ POSSIBLE_ROLES),
/* harmony export */   SchemaType: () => (/* binding */ SchemaType),
/* harmony export */   TaskType: () => (/* binding */ TaskType)
/* harmony export */ });
/**
 * Contains the list of OpenAPI data types
 * as defined by https://swagger.io/docs/specification/data-models/data-types/
 * @public
 */
var SchemaType;
(function (SchemaType) {
    /** String type. */
    SchemaType["STRING"] = "string";
    /** Number type. */
    SchemaType["NUMBER"] = "number";
    /** Integer type. */
    SchemaType["INTEGER"] = "integer";
    /** Boolean type. */
    SchemaType["BOOLEAN"] = "boolean";
    /** Array type. */
    SchemaType["ARRAY"] = "array";
    /** Object type. */
    SchemaType["OBJECT"] = "object";
})(SchemaType || (SchemaType = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @public
 */
var ExecutableCodeLanguage;
(function (ExecutableCodeLanguage) {
    ExecutableCodeLanguage["LANGUAGE_UNSPECIFIED"] = "language_unspecified";
    ExecutableCodeLanguage["PYTHON"] = "python";
})(ExecutableCodeLanguage || (ExecutableCodeLanguage = {}));
/**
 * Possible outcomes of code execution.
 * @public
 */
var Outcome;
(function (Outcome) {
    /**
     * Unspecified status. This value should not be used.
     */
    Outcome["OUTCOME_UNSPECIFIED"] = "outcome_unspecified";
    /**
     * Code execution completed successfully.
     */
    Outcome["OUTCOME_OK"] = "outcome_ok";
    /**
     * Code execution finished but with a failure. `stderr` should contain the
     * reason.
     */
    Outcome["OUTCOME_FAILED"] = "outcome_failed";
    /**
     * Code execution ran for too long, and was cancelled. There may or may not
     * be a partial output present.
     */
    Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "outcome_deadline_exceeded";
})(Outcome || (Outcome = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Possible roles.
 * @public
 */
const POSSIBLE_ROLES = ["user", "model", "function", "system"];
/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */
var HarmCategory;
(function (HarmCategory) {
    HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
    HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
    HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
    HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
    HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
})(HarmCategory || (HarmCategory = {}));
/**
 * Threshold above which a prompt or candidate will be blocked.
 * @public
 */
var HarmBlockThreshold;
(function (HarmBlockThreshold) {
    // Threshold is unspecified.
    HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
    // Content with NEGLIGIBLE will be allowed.
    HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    // Content with NEGLIGIBLE and LOW will be allowed.
    HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    // Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed.
    HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    // All content will be allowed.
    HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
})(HarmBlockThreshold || (HarmBlockThreshold = {}));
/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */
var HarmProbability;
(function (HarmProbability) {
    // Probability is unspecified.
    HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
    // Content has a negligible chance of being unsafe.
    HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
    // Content has a low chance of being unsafe.
    HarmProbability["LOW"] = "LOW";
    // Content has a medium chance of being unsafe.
    HarmProbability["MEDIUM"] = "MEDIUM";
    // Content has a high chance of being unsafe.
    HarmProbability["HIGH"] = "HIGH";
})(HarmProbability || (HarmProbability = {}));
/**
 * Reason that a prompt was blocked.
 * @public
 */
var BlockReason;
(function (BlockReason) {
    // A blocked reason was not specified.
    BlockReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
    // Content was blocked by safety settings.
    BlockReason["SAFETY"] = "SAFETY";
    // Content was blocked, but the reason is uncategorized.
    BlockReason["OTHER"] = "OTHER";
})(BlockReason || (BlockReason = {}));
/**
 * Reason that a candidate finished.
 * @public
 */
var FinishReason;
(function (FinishReason) {
    // Default value. This value is unused.
    FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
    // Natural stop point of the model or provided stop sequence.
    FinishReason["STOP"] = "STOP";
    // The maximum number of tokens as specified in the request was reached.
    FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
    // The candidate content was flagged for safety reasons.
    FinishReason["SAFETY"] = "SAFETY";
    // The candidate content was flagged for recitation reasons.
    FinishReason["RECITATION"] = "RECITATION";
    // The candidate content was flagged for using an unsupported language.
    FinishReason["LANGUAGE"] = "LANGUAGE";
    // Unknown reason.
    FinishReason["OTHER"] = "OTHER";
})(FinishReason || (FinishReason = {}));
/**
 * Task type for embedding content.
 * @public
 */
var TaskType;
(function (TaskType) {
    TaskType["TASK_TYPE_UNSPECIFIED"] = "TASK_TYPE_UNSPECIFIED";
    TaskType["RETRIEVAL_QUERY"] = "RETRIEVAL_QUERY";
    TaskType["RETRIEVAL_DOCUMENT"] = "RETRIEVAL_DOCUMENT";
    TaskType["SEMANTIC_SIMILARITY"] = "SEMANTIC_SIMILARITY";
    TaskType["CLASSIFICATION"] = "CLASSIFICATION";
    TaskType["CLUSTERING"] = "CLUSTERING";
})(TaskType || (TaskType = {}));
/**
 * @public
 */
var FunctionCallingMode;
(function (FunctionCallingMode) {
    // Unspecified function calling mode. This value should not be used.
    FunctionCallingMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Default model behavior, model decides to predict either a function call
    // or a natural language repspose.
    FunctionCallingMode["AUTO"] = "AUTO";
    // Model is constrained to always predicting a function call only.
    // If "allowed_function_names" are set, the predicted function call will be
    // limited to any one of "allowed_function_names", else the predicted
    // function call will be any one of the provided "function_declarations".
    FunctionCallingMode["ANY"] = "ANY";
    // Model will not predict any function call. Model behavior is same as when
    // not passing any function declarations.
    FunctionCallingMode["NONE"] = "NONE";
})(FunctionCallingMode || (FunctionCallingMode = {}));
/**
 * The mode of the predictor to be used in dynamic retrieval.
 * @public
 */
var DynamicRetrievalMode;
(function (DynamicRetrievalMode) {
    // Unspecified function calling mode. This value should not be used.
    DynamicRetrievalMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Run retrieval only when system decides it is necessary.
    DynamicRetrievalMode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(DynamicRetrievalMode || (DynamicRetrievalMode = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Basic error type for this SDK.
 * @public
 */
class GoogleGenerativeAIError extends Error {
    constructor(message) {
        super(`[GoogleGenerativeAI Error]: ${message}`);
    }
}
/**
 * Errors in the contents of a response from the model. This includes parsing
 * errors, or responses including a safety block reason.
 * @public
 */
class GoogleGenerativeAIResponseError extends GoogleGenerativeAIError {
    constructor(message, response) {
        super(message);
        this.response = response;
    }
}
/**
 * Error class covering HTTP errors when calling the server. Includes HTTP
 * status, statusText, and optional details, if provided in the server response.
 * @public
 */
class GoogleGenerativeAIFetchError extends GoogleGenerativeAIError {
    constructor(message, status, statusText, errorDetails) {
        super(message);
        this.status = status;
        this.statusText = statusText;
        this.errorDetails = errorDetails;
    }
}
/**
 * Errors in the contents of a request originating from user input.
 * @public
 */
class GoogleGenerativeAIRequestInputError extends GoogleGenerativeAIError {
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_BASE_URL = "https://generativelanguage.googleapis.com";
const DEFAULT_API_VERSION = "v1beta";
/**
 * We can't `require` package.json if this runs on web. We will use rollup to
 * swap in the version number here at build time.
 */
const PACKAGE_VERSION = "0.21.0";
const PACKAGE_LOG_HEADER = "genai-js";
var Task;
(function (Task) {
    Task["GENERATE_CONTENT"] = "generateContent";
    Task["STREAM_GENERATE_CONTENT"] = "streamGenerateContent";
    Task["COUNT_TOKENS"] = "countTokens";
    Task["EMBED_CONTENT"] = "embedContent";
    Task["BATCH_EMBED_CONTENTS"] = "batchEmbedContents";
})(Task || (Task = {}));
class RequestUrl {
    constructor(model, task, apiKey, stream, requestOptions) {
        this.model = model;
        this.task = task;
        this.apiKey = apiKey;
        this.stream = stream;
        this.requestOptions = requestOptions;
    }
    toString() {
        var _a, _b;
        const apiVersion = ((_a = this.requestOptions) === null || _a === void 0 ? void 0 : _a.apiVersion) || DEFAULT_API_VERSION;
        const baseUrl = ((_b = this.requestOptions) === null || _b === void 0 ? void 0 : _b.baseUrl) || DEFAULT_BASE_URL;
        let url = `${baseUrl}/${apiVersion}/${this.model}:${this.task}`;
        if (this.stream) {
            url += "?alt=sse";
        }
        return url;
    }
}
/**
 * Simple, but may become more complex if we add more versions to log.
 */
function getClientHeaders(requestOptions) {
    const clientHeaders = [];
    if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.apiClient) {
        clientHeaders.push(requestOptions.apiClient);
    }
    clientHeaders.push(`${PACKAGE_LOG_HEADER}/${PACKAGE_VERSION}`);
    return clientHeaders.join(" ");
}
async function getHeaders(url) {
    var _a;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-goog-api-client", getClientHeaders(url.requestOptions));
    headers.append("x-goog-api-key", url.apiKey);
    let customHeaders = (_a = url.requestOptions) === null || _a === void 0 ? void 0 : _a.customHeaders;
    if (customHeaders) {
        if (!(customHeaders instanceof Headers)) {
            try {
                customHeaders = new Headers(customHeaders);
            }
            catch (e) {
                throw new GoogleGenerativeAIRequestInputError(`unable to convert customHeaders value ${JSON.stringify(customHeaders)} to Headers: ${e.message}`);
            }
        }
        for (const [headerName, headerValue] of customHeaders.entries()) {
            if (headerName === "x-goog-api-key") {
                throw new GoogleGenerativeAIRequestInputError(`Cannot set reserved header name ${headerName}`);
            }
            else if (headerName === "x-goog-api-client") {
                throw new GoogleGenerativeAIRequestInputError(`Header name ${headerName} can only be set using the apiClient field`);
            }
            headers.append(headerName, headerValue);
        }
    }
    return headers;
}
async function constructModelRequest(model, task, apiKey, stream, body, requestOptions) {
    const url = new RequestUrl(model, task, apiKey, stream, requestOptions);
    return {
        url: url.toString(),
        fetchOptions: Object.assign(Object.assign({}, buildFetchOptions(requestOptions)), { method: "POST", headers: await getHeaders(url), body }),
    };
}
async function makeModelRequest(model, task, apiKey, stream, body, requestOptions = {}, 
// Allows this to be stubbed for tests
fetchFn = fetch) {
    const { url, fetchOptions } = await constructModelRequest(model, task, apiKey, stream, body, requestOptions);
    return makeRequest(url, fetchOptions, fetchFn);
}
async function makeRequest(url, fetchOptions, fetchFn = fetch) {
    let response;
    try {
        response = await fetchFn(url, fetchOptions);
    }
    catch (e) {
        handleResponseError(e, url);
    }
    if (!response.ok) {
        await handleResponseNotOk(response, url);
    }
    return response;
}
function handleResponseError(e, url) {
    let err = e;
    if (!(e instanceof GoogleGenerativeAIFetchError ||
        e instanceof GoogleGenerativeAIRequestInputError)) {
        err = new GoogleGenerativeAIError(`Error fetching from ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
    }
    throw err;
}
async function handleResponseNotOk(response, url) {
    let message = "";
    let errorDetails;
    try {
        const json = await response.json();
        message = json.error.message;
        if (json.error.details) {
            message += ` ${JSON.stringify(json.error.details)}`;
            errorDetails = json.error.details;
        }
    }
    catch (e) {
        // ignored
    }
    throw new GoogleGenerativeAIFetchError(`Error fetching from ${url.toString()}: [${response.status} ${response.statusText}] ${message}`, response.status, response.statusText, errorDetails);
}
/**
 * Generates the request options to be passed to the fetch API.
 * @param requestOptions - The user-defined request options.
 * @returns The generated request options.
 */
function buildFetchOptions(requestOptions) {
    const fetchOptions = {};
    if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) !== undefined || (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
        const controller = new AbortController();
        if ((requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.timeout) >= 0) {
            setTimeout(() => controller.abort(), requestOptions.timeout);
        }
        if (requestOptions === null || requestOptions === void 0 ? void 0 : requestOptions.signal) {
            requestOptions.signal.addEventListener("abort", () => {
                controller.abort();
            });
        }
        fetchOptions.signal = controller.signal;
    }
    return fetchOptions;
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Adds convenience helper methods to a response object, including stream
 * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
 */
function addHelpers(response) {
    response.text = () => {
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` +
                    `candidates. Returning text from the first candidate only. ` +
                    `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getText(response);
        }
        else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Text not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return "";
    };
    /**
     * TODO: remove at next major version
     */
    response.functionCall = () => {
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` +
                    `candidates. Returning function calls from the first candidate only. ` +
                    `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            console.warn(`response.functionCall() is deprecated. ` +
                `Use response.functionCalls() instead.`);
            return getFunctionCalls(response)[0];
        }
        else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return undefined;
    };
    response.functionCalls = () => {
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` +
                    `candidates. Returning function calls from the first candidate only. ` +
                    `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getFunctionCalls(response);
        }
        else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return undefined;
    };
    return response;
}
/**
 * Returns all text found in all parts of first candidate.
 */
function getText(response) {
    var _a, _b, _c, _d;
    const textStrings = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts) {
            if (part.text) {
                textStrings.push(part.text);
            }
            if (part.executableCode) {
                textStrings.push("\n```" +
                    part.executableCode.language +
                    "\n" +
                    part.executableCode.code +
                    "\n```\n");
            }
            if (part.codeExecutionResult) {
                textStrings.push("\n```\n" + part.codeExecutionResult.output + "\n```\n");
            }
        }
    }
    if (textStrings.length > 0) {
        return textStrings.join("");
    }
    else {
        return "";
    }
}
/**
 * Returns functionCall of first candidate.
 */
function getFunctionCalls(response) {
    var _a, _b, _c, _d;
    const functionCalls = [];
    if ((_b = (_a = response.candidates) === null || _a === void 0 ? void 0 : _a[0].content) === null || _b === void 0 ? void 0 : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0].content) === null || _d === void 0 ? void 0 : _d.parts) {
            if (part.functionCall) {
                functionCalls.push(part.functionCall);
            }
        }
    }
    if (functionCalls.length > 0) {
        return functionCalls;
    }
    else {
        return undefined;
    }
}
const badFinishReasons = [
    FinishReason.RECITATION,
    FinishReason.SAFETY,
    FinishReason.LANGUAGE,
];
function hadBadFinishReason(candidate) {
    return (!!candidate.finishReason &&
        badFinishReasons.includes(candidate.finishReason));
}
function formatBlockErrorMessage(response) {
    var _a, _b, _c;
    let message = "";
    if ((!response.candidates || response.candidates.length === 0) &&
        response.promptFeedback) {
        message += "Response was blocked";
        if ((_a = response.promptFeedback) === null || _a === void 0 ? void 0 : _a.blockReason) {
            message += ` due to ${response.promptFeedback.blockReason}`;
        }
        if ((_b = response.promptFeedback) === null || _b === void 0 ? void 0 : _b.blockReasonMessage) {
            message += `: ${response.promptFeedback.blockReasonMessage}`;
        }
    }
    else if ((_c = response.candidates) === null || _c === void 0 ? void 0 : _c[0]) {
        const firstCandidate = response.candidates[0];
        if (hadBadFinishReason(firstCandidate)) {
            message += `Candidate was blocked due to ${firstCandidate.finishReason}`;
            if (firstCandidate.finishMessage) {
                message += `: ${firstCandidate.finishMessage}`;
            }
        }
    }
    return message;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const responseLineRE = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
/**
 * Process a response.body stream from the backend and return an
 * iterator that provides one complete GenerateContentResponse at a time
 * and a promise that resolves with a single aggregated
 * GenerateContentResponse.
 *
 * @param response - Response from a fetch call
 */
function processStream(response) {
    const inputStream = response.body.pipeThrough(new TextDecoderStream("utf8", { fatal: true }));
    const responseStream = getResponseStream(inputStream);
    const [stream1, stream2] = responseStream.tee();
    return {
        stream: generateResponseSequence(stream1),
        response: getResponsePromise(stream2),
    };
}
async function getResponsePromise(stream) {
    const allResponses = [];
    const reader = stream.getReader();
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            return addHelpers(aggregateResponses(allResponses));
        }
        allResponses.push(value);
    }
}
function generateResponseSequence(stream) {
    return __asyncGenerator(this, arguments, function* generateResponseSequence_1() {
        const reader = stream.getReader();
        while (true) {
            const { value, done } = yield __await(reader.read());
            if (done) {
                break;
            }
            yield yield __await(addHelpers(value));
        }
    });
}
/**
 * Reads a raw stream from the fetch response and join incomplete
 * chunks, returning a new stream that provides a single complete
 * GenerateContentResponse in each iteration.
 */
function getResponseStream(inputStream) {
    const reader = inputStream.getReader();
    const stream = new ReadableStream({
        start(controller) {
            let currentText = "";
            return pump();
            function pump() {
                return reader.read().then(({ value, done }) => {
                    if (done) {
                        if (currentText.trim()) {
                            controller.error(new GoogleGenerativeAIError("Failed to parse stream"));
                            return;
                        }
                        controller.close();
                        return;
                    }
                    currentText += value;
                    let match = currentText.match(responseLineRE);
                    let parsedResponse;
                    while (match) {
                        try {
                            parsedResponse = JSON.parse(match[1]);
                        }
                        catch (e) {
                            controller.error(new GoogleGenerativeAIError(`Error parsing JSON response: "${match[1]}"`));
                            return;
                        }
                        controller.enqueue(parsedResponse);
                        currentText = currentText.substring(match[0].length);
                        match = currentText.match(responseLineRE);
                    }
                    return pump();
                });
            }
        },
    });
    return stream;
}
/**
 * Aggregates an array of `GenerateContentResponse`s into a single
 * GenerateContentResponse.
 */
function aggregateResponses(responses) {
    const lastResponse = responses[responses.length - 1];
    const aggregatedResponse = {
        promptFeedback: lastResponse === null || lastResponse === void 0 ? void 0 : lastResponse.promptFeedback,
    };
    for (const response of responses) {
        if (response.candidates) {
            for (const candidate of response.candidates) {
                const i = candidate.index;
                if (!aggregatedResponse.candidates) {
                    aggregatedResponse.candidates = [];
                }
                if (!aggregatedResponse.candidates[i]) {
                    aggregatedResponse.candidates[i] = {
                        index: candidate.index,
                    };
                }
                // Keep overwriting, the last one will be final
                aggregatedResponse.candidates[i].citationMetadata =
                    candidate.citationMetadata;
                aggregatedResponse.candidates[i].groundingMetadata =
                    candidate.groundingMetadata;
                aggregatedResponse.candidates[i].finishReason = candidate.finishReason;
                aggregatedResponse.candidates[i].finishMessage =
                    candidate.finishMessage;
                aggregatedResponse.candidates[i].safetyRatings =
                    candidate.safetyRatings;
                /**
                 * Candidates should always have content and parts, but this handles
                 * possible malformed responses.
                 */
                if (candidate.content && candidate.content.parts) {
                    if (!aggregatedResponse.candidates[i].content) {
                        aggregatedResponse.candidates[i].content = {
                            role: candidate.content.role || "user",
                            parts: [],
                        };
                    }
                    const newPart = {};
                    for (const part of candidate.content.parts) {
                        if (part.text) {
                            newPart.text = part.text;
                        }
                        if (part.functionCall) {
                            newPart.functionCall = part.functionCall;
                        }
                        if (part.executableCode) {
                            newPart.executableCode = part.executableCode;
                        }
                        if (part.codeExecutionResult) {
                            newPart.codeExecutionResult = part.codeExecutionResult;
                        }
                        if (Object.keys(newPart).length === 0) {
                            newPart.text = "";
                        }
                        aggregatedResponse.candidates[i].content.parts.push(newPart);
                    }
                }
            }
        }
        if (response.usageMetadata) {
            aggregatedResponse.usageMetadata = response.usageMetadata;
        }
    }
    return aggregatedResponse;
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function generateContentStream(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.STREAM_GENERATE_CONTENT, apiKey, 
    /* stream */ true, JSON.stringify(params), requestOptions);
    return processStream(response);
}
async function generateContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.GENERATE_CONTENT, apiKey, 
    /* stream */ false, JSON.stringify(params), requestOptions);
    const responseJson = await response.json();
    const enhancedResponse = addHelpers(responseJson);
    return {
        response: enhancedResponse,
    };
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function formatSystemInstruction(input) {
    // null or undefined
    if (input == null) {
        return undefined;
    }
    else if (typeof input === "string") {
        return { role: "system", parts: [{ text: input }] };
    }
    else if (input.text) {
        return { role: "system", parts: [input] };
    }
    else if (input.parts) {
        if (!input.role) {
            return { role: "system", parts: input.parts };
        }
        else {
            return input;
        }
    }
}
function formatNewContent(request) {
    let newParts = [];
    if (typeof request === "string") {
        newParts = [{ text: request }];
    }
    else {
        for (const partOrString of request) {
            if (typeof partOrString === "string") {
                newParts.push({ text: partOrString });
            }
            else {
                newParts.push(partOrString);
            }
        }
    }
    return assignRoleToPartsAndValidateSendMessageRequest(newParts);
}
/**
 * When multiple Part types (i.e. FunctionResponsePart and TextPart) are
 * passed in a single Part array, we may need to assign different roles to each
 * part. Currently only FunctionResponsePart requires a role other than 'user'.
 * @private
 * @param parts Array of parts to pass to the model
 * @returns Array of content items
 */
function assignRoleToPartsAndValidateSendMessageRequest(parts) {
    const userContent = { role: "user", parts: [] };
    const functionContent = { role: "function", parts: [] };
    let hasUserContent = false;
    let hasFunctionContent = false;
    for (const part of parts) {
        if ("functionResponse" in part) {
            functionContent.parts.push(part);
            hasFunctionContent = true;
        }
        else {
            userContent.parts.push(part);
            hasUserContent = true;
        }
    }
    if (hasUserContent && hasFunctionContent) {
        throw new GoogleGenerativeAIError("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");
    }
    if (!hasUserContent && !hasFunctionContent) {
        throw new GoogleGenerativeAIError("No content is provided for sending chat message.");
    }
    if (hasUserContent) {
        return userContent;
    }
    return functionContent;
}
function formatCountTokensInput(params, modelParams) {
    var _a;
    let formattedGenerateContentRequest = {
        model: modelParams === null || modelParams === void 0 ? void 0 : modelParams.model,
        generationConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.generationConfig,
        safetySettings: modelParams === null || modelParams === void 0 ? void 0 : modelParams.safetySettings,
        tools: modelParams === null || modelParams === void 0 ? void 0 : modelParams.tools,
        toolConfig: modelParams === null || modelParams === void 0 ? void 0 : modelParams.toolConfig,
        systemInstruction: modelParams === null || modelParams === void 0 ? void 0 : modelParams.systemInstruction,
        cachedContent: (_a = modelParams === null || modelParams === void 0 ? void 0 : modelParams.cachedContent) === null || _a === void 0 ? void 0 : _a.name,
        contents: [],
    };
    const containsGenerateContentRequest = params.generateContentRequest != null;
    if (params.contents) {
        if (containsGenerateContentRequest) {
            throw new GoogleGenerativeAIRequestInputError("CountTokensRequest must have one of contents or generateContentRequest, not both.");
        }
        formattedGenerateContentRequest.contents = params.contents;
    }
    else if (containsGenerateContentRequest) {
        formattedGenerateContentRequest = Object.assign(Object.assign({}, formattedGenerateContentRequest), params.generateContentRequest);
    }
    else {
        // Array or string
        const content = formatNewContent(params);
        formattedGenerateContentRequest.contents = [content];
    }
    return { generateContentRequest: formattedGenerateContentRequest };
}
function formatGenerateContentInput(params) {
    let formattedRequest;
    if (params.contents) {
        formattedRequest = params;
    }
    else {
        // Array or string
        const content = formatNewContent(params);
        formattedRequest = { contents: [content] };
    }
    if (params.systemInstruction) {
        formattedRequest.systemInstruction = formatSystemInstruction(params.systemInstruction);
    }
    return formattedRequest;
}
function formatEmbedContentInput(params) {
    if (typeof params === "string" || Array.isArray(params)) {
        const content = formatNewContent(params);
        return { content };
    }
    return params;
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// https://ai.google.dev/api/rest/v1beta/Content#part
const VALID_PART_FIELDS = [
    "text",
    "inlineData",
    "functionCall",
    "functionResponse",
    "executableCode",
    "codeExecutionResult",
];
const VALID_PARTS_PER_ROLE = {
    user: ["text", "inlineData"],
    function: ["functionResponse"],
    model: ["text", "functionCall", "executableCode", "codeExecutionResult"],
    // System instructions shouldn't be in history anyway.
    system: ["text"],
};
function validateChatHistory(history) {
    let prevContent = false;
    for (const currContent of history) {
        const { role, parts } = currContent;
        if (!prevContent && role !== "user") {
            throw new GoogleGenerativeAIError(`First content should be with role 'user', got ${role}`);
        }
        if (!POSSIBLE_ROLES.includes(role)) {
            throw new GoogleGenerativeAIError(`Each item should include role field. Got ${role} but valid roles are: ${JSON.stringify(POSSIBLE_ROLES)}`);
        }
        if (!Array.isArray(parts)) {
            throw new GoogleGenerativeAIError("Content should have 'parts' property with an array of Parts");
        }
        if (parts.length === 0) {
            throw new GoogleGenerativeAIError("Each Content should have at least one part");
        }
        const countFields = {
            text: 0,
            inlineData: 0,
            functionCall: 0,
            functionResponse: 0,
            fileData: 0,
            executableCode: 0,
            codeExecutionResult: 0,
        };
        for (const part of parts) {
            for (const key of VALID_PART_FIELDS) {
                if (key in part) {
                    countFields[key] += 1;
                }
            }
        }
        const validParts = VALID_PARTS_PER_ROLE[role];
        for (const key of VALID_PART_FIELDS) {
            if (!validParts.includes(key) && countFields[key] > 0) {
                throw new GoogleGenerativeAIError(`Content with role '${role}' can't contain '${key}' part`);
            }
        }
        prevContent = true;
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do not log a message for this error.
 */
const SILENT_ERROR = "SILENT_ERROR";
/**
 * ChatSession class that enables sending chat messages and stores
 * history of sent and received messages so far.
 *
 * @public
 */
class ChatSession {
    constructor(apiKey, model, params, _requestOptions = {}) {
        this.model = model;
        this.params = params;
        this._requestOptions = _requestOptions;
        this._history = [];
        this._sendPromise = Promise.resolve();
        this._apiKey = apiKey;
        if (params === null || params === void 0 ? void 0 : params.history) {
            validateChatHistory(params.history);
            this._history = params.history;
        }
    }
    /**
     * Gets the chat history so far. Blocked prompts are not added to history.
     * Blocked candidates are not added to history, nor are the prompts that
     * generated them.
     */
    async getHistory() {
        await this._sendPromise;
        return this._history;
    }
    /**
     * Sends a chat message and receives a non-streaming
     * {@link GenerateContentResult}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async sendMessage(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [...this._history, newContent],
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        let finalResult;
        // Add onto the chain.
        this._sendPromise = this._sendPromise
            .then(() => generateContent(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions))
            .then((result) => {
            var _a;
            if (result.response.candidates &&
                result.response.candidates.length > 0) {
                this._history.push(newContent);
                const responseContent = Object.assign({ parts: [], 
                    // Response seems to come back without a role set.
                    role: "model" }, (_a = result.response.candidates) === null || _a === void 0 ? void 0 : _a[0].content);
                this._history.push(responseContent);
            }
            else {
                const blockErrorMessage = formatBlockErrorMessage(result.response);
                if (blockErrorMessage) {
                    console.warn(`sendMessage() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
            finalResult = result;
        });
        await this._sendPromise;
        return finalResult;
    }
    /**
     * Sends a chat message and receives the response as a
     * {@link GenerateContentStreamResult} containing an iterable stream
     * and a response promise.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async sendMessageStream(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === void 0 ? void 0 : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === void 0 ? void 0 : _b.generationConfig,
            tools: (_c = this.params) === null || _c === void 0 ? void 0 : _c.tools,
            toolConfig: (_d = this.params) === null || _d === void 0 ? void 0 : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === void 0 ? void 0 : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === void 0 ? void 0 : _f.cachedContent,
            contents: [...this._history, newContent],
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        const streamPromise = generateContentStream(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions);
        // Add onto the chain.
        this._sendPromise = this._sendPromise
            .then(() => streamPromise)
            // This must be handled to avoid unhandled rejection, but jump
            // to the final catch block with a label to not log this error.
            .catch((_ignored) => {
            throw new Error(SILENT_ERROR);
        })
            .then((streamResult) => streamResult.response)
            .then((response) => {
            if (response.candidates && response.candidates.length > 0) {
                this._history.push(newContent);
                const responseContent = Object.assign({}, response.candidates[0].content);
                // Response seems to come back without a role set.
                if (!responseContent.role) {
                    responseContent.role = "model";
                }
                this._history.push(responseContent);
            }
            else {
                const blockErrorMessage = formatBlockErrorMessage(response);
                if (blockErrorMessage) {
                    console.warn(`sendMessageStream() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
        })
            .catch((e) => {
            // Errors in streamPromise are already catchable by the user as
            // streamPromise is returned.
            // Avoid duplicating the error message in logs.
            if (e.message !== SILENT_ERROR) {
                // Users do not have access to _sendPromise to catch errors
                // downstream from streamPromise, so they should not throw.
                console.error(e);
            }
        });
        return streamPromise;
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function countTokens(apiKey, model, params, singleRequestOptions) {
    const response = await makeModelRequest(model, Task.COUNT_TOKENS, apiKey, false, JSON.stringify(params), singleRequestOptions);
    return response.json();
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function embedContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task.EMBED_CONTENT, apiKey, false, JSON.stringify(params), requestOptions);
    return response.json();
}
async function batchEmbedContents(apiKey, model, params, requestOptions) {
    const requestsWithModel = params.requests.map((request) => {
        return Object.assign(Object.assign({}, request), { model });
    });
    const response = await makeModelRequest(model, Task.BATCH_EMBED_CONTENTS, apiKey, false, JSON.stringify({ requests: requestsWithModel }), requestOptions);
    return response.json();
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Class for generative model APIs.
 * @public
 */
class GenerativeModel {
    constructor(apiKey, modelParams, _requestOptions = {}) {
        this.apiKey = apiKey;
        this._requestOptions = _requestOptions;
        if (modelParams.model.includes("/")) {
            // Models may be named "models/model-name" or "tunedModels/model-name"
            this.model = modelParams.model;
        }
        else {
            // If path is not included, assume it's a non-tuned model.
            this.model = `models/${modelParams.model}`;
        }
        this.generationConfig = modelParams.generationConfig || {};
        this.safetySettings = modelParams.safetySettings || [];
        this.tools = modelParams.tools;
        this.toolConfig = modelParams.toolConfig;
        this.systemInstruction = formatSystemInstruction(modelParams.systemInstruction);
        this.cachedContent = modelParams.cachedContent;
    }
    /**
     * Makes a single non-streaming call to the model
     * and returns an object containing a single {@link GenerateContentResponse}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async generateContent(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContent(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings, tools: this.tools, toolConfig: this.toolConfig, systemInstruction: this.systemInstruction, cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Makes a single streaming call to the model and returns an object
     * containing an iterable stream that iterates over all chunks in the
     * streaming response as well as a promise that returns the final
     * aggregated response.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async generateContentStream(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContentStream(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings, tools: this.tools, toolConfig: this.toolConfig, systemInstruction: this.systemInstruction, cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Gets a new {@link ChatSession} instance which can be used for
     * multi-turn chats.
     */
    startChat(startChatParams) {
        var _a;
        return new ChatSession(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings, tools: this.tools, toolConfig: this.toolConfig, systemInstruction: this.systemInstruction, cachedContent: (_a = this.cachedContent) === null || _a === void 0 ? void 0 : _a.name }, startChatParams), this._requestOptions);
    }
    /**
     * Counts the tokens in the provided request.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async countTokens(request, requestOptions = {}) {
        const formattedParams = formatCountTokensInput(request, {
            model: this.model,
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: this.cachedContent,
        });
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return countTokens(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds the provided content.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async embedContent(request, requestOptions = {}) {
        const formattedParams = formatEmbedContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return embedContent(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds an array of {@link EmbedContentRequest}s.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async batchEmbedContents(batchEmbedContentRequest, requestOptions = {}) {
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return batchEmbedContents(this.apiKey, this.model, batchEmbedContentRequest, generativeModelRequestOptions);
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Top-level class for this SDK
 * @public
 */
class GoogleGenerativeAI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Gets a {@link GenerativeModel} instance for the provided model name.
     */
    getGenerativeModel(modelParams, requestOptions) {
        if (!modelParams.model) {
            throw new GoogleGenerativeAIError(`Must provide a model name. ` +
                `Example: genai.getGenerativeModel({ model: 'my-model-name' })`);
        }
        return new GenerativeModel(this.apiKey, modelParams, requestOptions);
    }
    /**
     * Creates a {@link GenerativeModel} instance from provided content cache.
     */
    getGenerativeModelFromCachedContent(cachedContent, modelParams, requestOptions) {
        if (!cachedContent.name) {
            throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `name` field.");
        }
        if (!cachedContent.model) {
            throw new GoogleGenerativeAIRequestInputError("Cached content must contain a `model` field.");
        }
        /**
         * Not checking tools and toolConfig for now as it would require a deep
         * equality comparison and isn't likely to be a common case.
         */
        const disallowedDuplicates = ["model", "systemInstruction"];
        for (const key of disallowedDuplicates) {
            if ((modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) &&
                cachedContent[key] &&
                (modelParams === null || modelParams === void 0 ? void 0 : modelParams[key]) !== cachedContent[key]) {
                if (key === "model") {
                    const modelParamsComp = modelParams.model.startsWith("models/")
                        ? modelParams.model.replace("models/", "")
                        : modelParams.model;
                    const cachedContentComp = cachedContent.model.startsWith("models/")
                        ? cachedContent.model.replace("models/", "")
                        : cachedContent.model;
                    if (modelParamsComp === cachedContentComp) {
                        continue;
                    }
                }
                throw new GoogleGenerativeAIRequestInputError(`Different value for "${key}" specified in modelParams` +
                    ` (${modelParams[key]}) and cachedContent (${cachedContent[key]})`);
            }
        }
        const modelParamsFromCache = Object.assign(Object.assign({}, modelParams), { model: cachedContent.model, tools: cachedContent.tools, toolConfig: cachedContent.toolConfig, systemInstruction: cachedContent.systemInstruction, cachedContent });
        return new GenerativeModel(this.apiKey, modelParamsFromCache, requestOptions);
    }
}


//# sourceMappingURL=index.mjs.map


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*********************************!*\
  !*** ./src/Frontend/content.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google/generative-ai */ "./node_modules/@google/generative-ai/dist/index.mjs");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

window.onload = function () {
  if (typeof chrome === 'undefined' || !chrome.runtime) {
    console.warn('Chrome extension APIs are not available');
    return;
  }
  function sendMessageToBackground(message) {
    try {
      chrome.runtime.sendMessage(message, function (response) {
        if (chrome.runtime.lastError) {
          console.warn('Error sending message:', chrome.runtime.lastError);
          return;
        }
      });
    } catch (error) {
      console.warn('Error in sendMessage:', error);
    }
  }
  function safelyStoreProgress(progress, title) {
    try {
      chrome.storage.sync.set({
        videoProgress: progress,
        title: title
      }, function () {
        if (chrome.runtime.lastError) {
          console.warn('Error storing progress:', chrome.runtime.lastError);
          return;
        }
        console.log('Progress stored:', progress);
      });
    } catch (error) {
      console.warn('Error in storage:', error);
    }
  }
  function initializeVideoTracking() {
    var videoElement = document.querySelector('video');
    if (!videoElement) {
      console.warn("No video element found.");
      return;
    }
    videoElement.addEventListener('timeupdate', function () {
      chrome.storage.sync.get(['videoCompleted'], function (result) {
        if (result.videoCompleted) {
          return;
        }
        var progress = videoElement.currentTime / videoElement.duration * 100;
        var videoTitle = document.title;
        var progressFixed = progress.toFixed(2);
        sendMessageToBackground({
          type: "progress_update",
          videoProgress: progressFixed,
          videoTitle: videoTitle
        });
        safelyStoreProgress(progressFixed, videoTitle);
        if (progress == 100) {
          try {
            chrome.storage.sync.set({
              videoCompleted: true
            }, function () {
              if (chrome.runtime.lastError) {
                console.warn('Error storing completion:', chrome.runtime.lastError);
              }
            });
          } catch (error) {
            console.warn('Error storing completion:', error);
          }
        }
      });
    });
  }
  setTimeout(initializeVideoTracking, 1000);
  var submitQuestion = document.getElementById('submitQuestion');
  submitQuestion.addEventListener('click', function () {
    var Prompt = document.getElementById('userQuestion').value;
    function executePrompt(_x) {
      return _executePrompt.apply(this, arguments);
    }
    function _executePrompt() {
      _executePrompt = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(Prompt) {
        var summariesContainer, getGeminiResponse, _getGeminiResponse;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _getGeminiResponse = function _getGeminiResponse3() {
                _getGeminiResponse = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(content) {
                  var apiKey, genAI, model, fullContent, result, response, textResponse;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        apiKey = "AIzaSyB1rICUSO4GYdpzY-dkX_kcdRubBplApCI";
                        genAI = new _google_generative_ai__WEBPACK_IMPORTED_MODULE_0__.GoogleGenerativeAI(apiKey);
                        model = genAI.getGenerativeModel({
                          model: "gemini-pro"
                        });
                        fullContent = content;
                        _context.prev = 4;
                        _context.next = 7;
                        return model.generateContent(fullContent);
                      case 7:
                        result = _context.sent;
                        _context.next = 10;
                        return result.response;
                      case 10:
                        response = _context.sent;
                        _context.next = 13;
                        return response.text();
                      case 13:
                        textResponse = _context.sent;
                        summariesContainer.innerHTML = textResponse;
                        _context.next = 21;
                        break;
                      case 17:
                        _context.prev = 17;
                        _context.t0 = _context["catch"](4);
                        console.error('Error generating processing:', _context.t0);
                        summariesContainer.innerHTML = 'Error processing your request.';
                      case 21:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee, null, [[4, 17]]);
                }));
                return _getGeminiResponse.apply(this, arguments);
              };
              getGeminiResponse = function _getGeminiResponse2(_x2) {
                return _getGeminiResponse.apply(this, arguments);
              };
              summariesContainer = document.getElementById('videoD');
              summariesContainer.innerHTML = 'Processing...';

              // Function to get AI response
              _context2.next = 6;
              return getGeminiResponse(Prompt);
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return _executePrompt.apply(this, arguments);
    }
    executePrompt(Prompt);
  });
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0NBQWdDOztBQUVqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyx3REFBd0Q7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQkFBMEI7O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLG9DQUFvQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsZ0RBQWdEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQywwQ0FBMEM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxrQ0FBa0M7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsa0RBQWtEO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvREFBb0Q7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0JBQW9CO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QW1CLG9CQUFBQyxHQUFBO2dCQUFBLE9BQUFuQixrQkFBQSxDQUFBL0MsS0FBQSxPQUFBRCxTQUFBO2NBQUE7Y0FKMUI4QyxrQkFBa0IsR0FBR25CLFFBQVEsQ0FBQ2EsY0FBYyxDQUFDLFFBQVEsQ0FBQztjQUM1RE0sa0JBQWtCLENBQUNrQixTQUFTLEdBQUcsZUFBZTs7Y0FFOUM7Y0FBQWQsU0FBQSxDQUFBekYsSUFBQTtjQUFBLE9BaUJNc0YsaUJBQWlCLENBQUNOLE1BQU0sQ0FBQztZQUFBO1lBQUE7Y0FBQSxPQUFBUyxTQUFBLENBQUEzRCxJQUFBO1VBQUE7UUFBQSxHQUFBc0QsUUFBQTtNQUFBLENBQ2xDO01BQUEsT0FBQUQsY0FBQSxDQUFBM0MsS0FBQSxPQUFBRCxTQUFBO0lBQUE7SUFDRDBDLGFBQWEsQ0FBQ0QsTUFBTSxDQUFDO0VBQ3pCLENBQUMsQ0FBQztBQUNKLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AZ29vZ2xlL2dlbmVyYXRpdmUtYWkvZGlzdC9pbmRleC5tanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Zyb250ZW5kL2NvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb250YWlucyB0aGUgbGlzdCBvZiBPcGVuQVBJIGRhdGEgdHlwZXNcbiAqIGFzIGRlZmluZWQgYnkgaHR0cHM6Ly9zd2FnZ2VyLmlvL2RvY3Mvc3BlY2lmaWNhdGlvbi9kYXRhLW1vZGVscy9kYXRhLXR5cGVzL1xuICogQHB1YmxpY1xuICovXG52YXIgU2NoZW1hVHlwZTtcbihmdW5jdGlvbiAoU2NoZW1hVHlwZSkge1xuICAgIC8qKiBTdHJpbmcgdHlwZS4gKi9cbiAgICBTY2hlbWFUeXBlW1wiU1RSSU5HXCJdID0gXCJzdHJpbmdcIjtcbiAgICAvKiogTnVtYmVyIHR5cGUuICovXG4gICAgU2NoZW1hVHlwZVtcIk5VTUJFUlwiXSA9IFwibnVtYmVyXCI7XG4gICAgLyoqIEludGVnZXIgdHlwZS4gKi9cbiAgICBTY2hlbWFUeXBlW1wiSU5URUdFUlwiXSA9IFwiaW50ZWdlclwiO1xuICAgIC8qKiBCb29sZWFuIHR5cGUuICovXG4gICAgU2NoZW1hVHlwZVtcIkJPT0xFQU5cIl0gPSBcImJvb2xlYW5cIjtcbiAgICAvKiogQXJyYXkgdHlwZS4gKi9cbiAgICBTY2hlbWFUeXBlW1wiQVJSQVlcIl0gPSBcImFycmF5XCI7XG4gICAgLyoqIE9iamVjdCB0eXBlLiAqL1xuICAgIFNjaGVtYVR5cGVbXCJPQkpFQ1RcIl0gPSBcIm9iamVjdFwiO1xufSkoU2NoZW1hVHlwZSB8fCAoU2NoZW1hVHlwZSA9IHt9KSk7XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4vKipcbiAqIEBwdWJsaWNcbiAqL1xudmFyIEV4ZWN1dGFibGVDb2RlTGFuZ3VhZ2U7XG4oZnVuY3Rpb24gKEV4ZWN1dGFibGVDb2RlTGFuZ3VhZ2UpIHtcbiAgICBFeGVjdXRhYmxlQ29kZUxhbmd1YWdlW1wiTEFOR1VBR0VfVU5TUEVDSUZJRURcIl0gPSBcImxhbmd1YWdlX3Vuc3BlY2lmaWVkXCI7XG4gICAgRXhlY3V0YWJsZUNvZGVMYW5ndWFnZVtcIlBZVEhPTlwiXSA9IFwicHl0aG9uXCI7XG59KShFeGVjdXRhYmxlQ29kZUxhbmd1YWdlIHx8IChFeGVjdXRhYmxlQ29kZUxhbmd1YWdlID0ge30pKTtcbi8qKlxuICogUG9zc2libGUgb3V0Y29tZXMgb2YgY29kZSBleGVjdXRpb24uXG4gKiBAcHVibGljXG4gKi9cbnZhciBPdXRjb21lO1xuKGZ1bmN0aW9uIChPdXRjb21lKSB7XG4gICAgLyoqXG4gICAgICogVW5zcGVjaWZpZWQgc3RhdHVzLiBUaGlzIHZhbHVlIHNob3VsZCBub3QgYmUgdXNlZC5cbiAgICAgKi9cbiAgICBPdXRjb21lW1wiT1VUQ09NRV9VTlNQRUNJRklFRFwiXSA9IFwib3V0Y29tZV91bnNwZWNpZmllZFwiO1xuICAgIC8qKlxuICAgICAqIENvZGUgZXhlY3V0aW9uIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkuXG4gICAgICovXG4gICAgT3V0Y29tZVtcIk9VVENPTUVfT0tcIl0gPSBcIm91dGNvbWVfb2tcIjtcbiAgICAvKipcbiAgICAgKiBDb2RlIGV4ZWN1dGlvbiBmaW5pc2hlZCBidXQgd2l0aCBhIGZhaWx1cmUuIGBzdGRlcnJgIHNob3VsZCBjb250YWluIHRoZVxuICAgICAqIHJlYXNvbi5cbiAgICAgKi9cbiAgICBPdXRjb21lW1wiT1VUQ09NRV9GQUlMRURcIl0gPSBcIm91dGNvbWVfZmFpbGVkXCI7XG4gICAgLyoqXG4gICAgICogQ29kZSBleGVjdXRpb24gcmFuIGZvciB0b28gbG9uZywgYW5kIHdhcyBjYW5jZWxsZWQuIFRoZXJlIG1heSBvciBtYXkgbm90XG4gICAgICogYmUgYSBwYXJ0aWFsIG91dHB1dCBwcmVzZW50LlxuICAgICAqL1xuICAgIE91dGNvbWVbXCJPVVRDT01FX0RFQURMSU5FX0VYQ0VFREVEXCJdID0gXCJvdXRjb21lX2RlYWRsaW5lX2V4Y2VlZGVkXCI7XG59KShPdXRjb21lIHx8IChPdXRjb21lID0ge30pKTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogUG9zc2libGUgcm9sZXMuXG4gKiBAcHVibGljXG4gKi9cbmNvbnN0IFBPU1NJQkxFX1JPTEVTID0gW1widXNlclwiLCBcIm1vZGVsXCIsIFwiZnVuY3Rpb25cIiwgXCJzeXN0ZW1cIl07XG4vKipcbiAqIEhhcm0gY2F0ZWdvcmllcyB0aGF0IHdvdWxkIGNhdXNlIHByb21wdHMgb3IgY2FuZGlkYXRlcyB0byBiZSBibG9ja2VkLlxuICogQHB1YmxpY1xuICovXG52YXIgSGFybUNhdGVnb3J5O1xuKGZ1bmN0aW9uIChIYXJtQ2F0ZWdvcnkpIHtcbiAgICBIYXJtQ2F0ZWdvcnlbXCJIQVJNX0NBVEVHT1JZX1VOU1BFQ0lGSUVEXCJdID0gXCJIQVJNX0NBVEVHT1JZX1VOU1BFQ0lGSUVEXCI7XG4gICAgSGFybUNhdGVnb3J5W1wiSEFSTV9DQVRFR09SWV9IQVRFX1NQRUVDSFwiXSA9IFwiSEFSTV9DQVRFR09SWV9IQVRFX1NQRUVDSFwiO1xuICAgIEhhcm1DYXRlZ29yeVtcIkhBUk1fQ0FURUdPUllfU0VYVUFMTFlfRVhQTElDSVRcIl0gPSBcIkhBUk1fQ0FURUdPUllfU0VYVUFMTFlfRVhQTElDSVRcIjtcbiAgICBIYXJtQ2F0ZWdvcnlbXCJIQVJNX0NBVEVHT1JZX0hBUkFTU01FTlRcIl0gPSBcIkhBUk1fQ0FURUdPUllfSEFSQVNTTUVOVFwiO1xuICAgIEhhcm1DYXRlZ29yeVtcIkhBUk1fQ0FURUdPUllfREFOR0VST1VTX0NPTlRFTlRcIl0gPSBcIkhBUk1fQ0FURUdPUllfREFOR0VST1VTX0NPTlRFTlRcIjtcbn0pKEhhcm1DYXRlZ29yeSB8fCAoSGFybUNhdGVnb3J5ID0ge30pKTtcbi8qKlxuICogVGhyZXNob2xkIGFib3ZlIHdoaWNoIGEgcHJvbXB0IG9yIGNhbmRpZGF0ZSB3aWxsIGJlIGJsb2NrZWQuXG4gKiBAcHVibGljXG4gKi9cbnZhciBIYXJtQmxvY2tUaHJlc2hvbGQ7XG4oZnVuY3Rpb24gKEhhcm1CbG9ja1RocmVzaG9sZCkge1xuICAgIC8vIFRocmVzaG9sZCBpcyB1bnNwZWNpZmllZC5cbiAgICBIYXJtQmxvY2tUaHJlc2hvbGRbXCJIQVJNX0JMT0NLX1RIUkVTSE9MRF9VTlNQRUNJRklFRFwiXSA9IFwiSEFSTV9CTE9DS19USFJFU0hPTERfVU5TUEVDSUZJRURcIjtcbiAgICAvLyBDb250ZW50IHdpdGggTkVHTElHSUJMRSB3aWxsIGJlIGFsbG93ZWQuXG4gICAgSGFybUJsb2NrVGhyZXNob2xkW1wiQkxPQ0tfTE9XX0FORF9BQk9WRVwiXSA9IFwiQkxPQ0tfTE9XX0FORF9BQk9WRVwiO1xuICAgIC8vIENvbnRlbnQgd2l0aCBORUdMSUdJQkxFIGFuZCBMT1cgd2lsbCBiZSBhbGxvd2VkLlxuICAgIEhhcm1CbG9ja1RocmVzaG9sZFtcIkJMT0NLX01FRElVTV9BTkRfQUJPVkVcIl0gPSBcIkJMT0NLX01FRElVTV9BTkRfQUJPVkVcIjtcbiAgICAvLyBDb250ZW50IHdpdGggTkVHTElHSUJMRSwgTE9XLCBhbmQgTUVESVVNIHdpbGwgYmUgYWxsb3dlZC5cbiAgICBIYXJtQmxvY2tUaHJlc2hvbGRbXCJCTE9DS19PTkxZX0hJR0hcIl0gPSBcIkJMT0NLX09OTFlfSElHSFwiO1xuICAgIC8vIEFsbCBjb250ZW50IHdpbGwgYmUgYWxsb3dlZC5cbiAgICBIYXJtQmxvY2tUaHJlc2hvbGRbXCJCTE9DS19OT05FXCJdID0gXCJCTE9DS19OT05FXCI7XG59KShIYXJtQmxvY2tUaHJlc2hvbGQgfHwgKEhhcm1CbG9ja1RocmVzaG9sZCA9IHt9KSk7XG4vKipcbiAqIFByb2JhYmlsaXR5IHRoYXQgYSBwcm9tcHQgb3IgY2FuZGlkYXRlIG1hdGNoZXMgYSBoYXJtIGNhdGVnb3J5LlxuICogQHB1YmxpY1xuICovXG52YXIgSGFybVByb2JhYmlsaXR5O1xuKGZ1bmN0aW9uIChIYXJtUHJvYmFiaWxpdHkpIHtcbiAgICAvLyBQcm9iYWJpbGl0eSBpcyB1bnNwZWNpZmllZC5cbiAgICBIYXJtUHJvYmFiaWxpdHlbXCJIQVJNX1BST0JBQklMSVRZX1VOU1BFQ0lGSUVEXCJdID0gXCJIQVJNX1BST0JBQklMSVRZX1VOU1BFQ0lGSUVEXCI7XG4gICAgLy8gQ29udGVudCBoYXMgYSBuZWdsaWdpYmxlIGNoYW5jZSBvZiBiZWluZyB1bnNhZmUuXG4gICAgSGFybVByb2JhYmlsaXR5W1wiTkVHTElHSUJMRVwiXSA9IFwiTkVHTElHSUJMRVwiO1xuICAgIC8vIENvbnRlbnQgaGFzIGEgbG93IGNoYW5jZSBvZiBiZWluZyB1bnNhZmUuXG4gICAgSGFybVByb2JhYmlsaXR5W1wiTE9XXCJdID0gXCJMT1dcIjtcbiAgICAvLyBDb250ZW50IGhhcyBhIG1lZGl1bSBjaGFuY2Ugb2YgYmVpbmcgdW5zYWZlLlxuICAgIEhhcm1Qcm9iYWJpbGl0eVtcIk1FRElVTVwiXSA9IFwiTUVESVVNXCI7XG4gICAgLy8gQ29udGVudCBoYXMgYSBoaWdoIGNoYW5jZSBvZiBiZWluZyB1bnNhZmUuXG4gICAgSGFybVByb2JhYmlsaXR5W1wiSElHSFwiXSA9IFwiSElHSFwiO1xufSkoSGFybVByb2JhYmlsaXR5IHx8IChIYXJtUHJvYmFiaWxpdHkgPSB7fSkpO1xuLyoqXG4gKiBSZWFzb24gdGhhdCBhIHByb21wdCB3YXMgYmxvY2tlZC5cbiAqIEBwdWJsaWNcbiAqL1xudmFyIEJsb2NrUmVhc29uO1xuKGZ1bmN0aW9uIChCbG9ja1JlYXNvbikge1xuICAgIC8vIEEgYmxvY2tlZCByZWFzb24gd2FzIG5vdCBzcGVjaWZpZWQuXG4gICAgQmxvY2tSZWFzb25bXCJCTE9DS0VEX1JFQVNPTl9VTlNQRUNJRklFRFwiXSA9IFwiQkxPQ0tFRF9SRUFTT05fVU5TUEVDSUZJRURcIjtcbiAgICAvLyBDb250ZW50IHdhcyBibG9ja2VkIGJ5IHNhZmV0eSBzZXR0aW5ncy5cbiAgICBCbG9ja1JlYXNvbltcIlNBRkVUWVwiXSA9IFwiU0FGRVRZXCI7XG4gICAgLy8gQ29udGVudCB3YXMgYmxvY2tlZCwgYnV0IHRoZSByZWFzb24gaXMgdW5jYXRlZ29yaXplZC5cbiAgICBCbG9ja1JlYXNvbltcIk9USEVSXCJdID0gXCJPVEhFUlwiO1xufSkoQmxvY2tSZWFzb24gfHwgKEJsb2NrUmVhc29uID0ge30pKTtcbi8qKlxuICogUmVhc29uIHRoYXQgYSBjYW5kaWRhdGUgZmluaXNoZWQuXG4gKiBAcHVibGljXG4gKi9cbnZhciBGaW5pc2hSZWFzb247XG4oZnVuY3Rpb24gKEZpbmlzaFJlYXNvbikge1xuICAgIC8vIERlZmF1bHQgdmFsdWUuIFRoaXMgdmFsdWUgaXMgdW51c2VkLlxuICAgIEZpbmlzaFJlYXNvbltcIkZJTklTSF9SRUFTT05fVU5TUEVDSUZJRURcIl0gPSBcIkZJTklTSF9SRUFTT05fVU5TUEVDSUZJRURcIjtcbiAgICAvLyBOYXR1cmFsIHN0b3AgcG9pbnQgb2YgdGhlIG1vZGVsIG9yIHByb3ZpZGVkIHN0b3Agc2VxdWVuY2UuXG4gICAgRmluaXNoUmVhc29uW1wiU1RPUFwiXSA9IFwiU1RPUFwiO1xuICAgIC8vIFRoZSBtYXhpbXVtIG51bWJlciBvZiB0b2tlbnMgYXMgc3BlY2lmaWVkIGluIHRoZSByZXF1ZXN0IHdhcyByZWFjaGVkLlxuICAgIEZpbmlzaFJlYXNvbltcIk1BWF9UT0tFTlNcIl0gPSBcIk1BWF9UT0tFTlNcIjtcbiAgICAvLyBUaGUgY2FuZGlkYXRlIGNvbnRlbnQgd2FzIGZsYWdnZWQgZm9yIHNhZmV0eSByZWFzb25zLlxuICAgIEZpbmlzaFJlYXNvbltcIlNBRkVUWVwiXSA9IFwiU0FGRVRZXCI7XG4gICAgLy8gVGhlIGNhbmRpZGF0ZSBjb250ZW50IHdhcyBmbGFnZ2VkIGZvciByZWNpdGF0aW9uIHJlYXNvbnMuXG4gICAgRmluaXNoUmVhc29uW1wiUkVDSVRBVElPTlwiXSA9IFwiUkVDSVRBVElPTlwiO1xuICAgIC8vIFRoZSBjYW5kaWRhdGUgY29udGVudCB3YXMgZmxhZ2dlZCBmb3IgdXNpbmcgYW4gdW5zdXBwb3J0ZWQgbGFuZ3VhZ2UuXG4gICAgRmluaXNoUmVhc29uW1wiTEFOR1VBR0VcIl0gPSBcIkxBTkdVQUdFXCI7XG4gICAgLy8gVW5rbm93biByZWFzb24uXG4gICAgRmluaXNoUmVhc29uW1wiT1RIRVJcIl0gPSBcIk9USEVSXCI7XG59KShGaW5pc2hSZWFzb24gfHwgKEZpbmlzaFJlYXNvbiA9IHt9KSk7XG4vKipcbiAqIFRhc2sgdHlwZSBmb3IgZW1iZWRkaW5nIGNvbnRlbnQuXG4gKiBAcHVibGljXG4gKi9cbnZhciBUYXNrVHlwZTtcbihmdW5jdGlvbiAoVGFza1R5cGUpIHtcbiAgICBUYXNrVHlwZVtcIlRBU0tfVFlQRV9VTlNQRUNJRklFRFwiXSA9IFwiVEFTS19UWVBFX1VOU1BFQ0lGSUVEXCI7XG4gICAgVGFza1R5cGVbXCJSRVRSSUVWQUxfUVVFUllcIl0gPSBcIlJFVFJJRVZBTF9RVUVSWVwiO1xuICAgIFRhc2tUeXBlW1wiUkVUUklFVkFMX0RPQ1VNRU5UXCJdID0gXCJSRVRSSUVWQUxfRE9DVU1FTlRcIjtcbiAgICBUYXNrVHlwZVtcIlNFTUFOVElDX1NJTUlMQVJJVFlcIl0gPSBcIlNFTUFOVElDX1NJTUlMQVJJVFlcIjtcbiAgICBUYXNrVHlwZVtcIkNMQVNTSUZJQ0FUSU9OXCJdID0gXCJDTEFTU0lGSUNBVElPTlwiO1xuICAgIFRhc2tUeXBlW1wiQ0xVU1RFUklOR1wiXSA9IFwiQ0xVU1RFUklOR1wiO1xufSkoVGFza1R5cGUgfHwgKFRhc2tUeXBlID0ge30pKTtcbi8qKlxuICogQHB1YmxpY1xuICovXG52YXIgRnVuY3Rpb25DYWxsaW5nTW9kZTtcbihmdW5jdGlvbiAoRnVuY3Rpb25DYWxsaW5nTW9kZSkge1xuICAgIC8vIFVuc3BlY2lmaWVkIGZ1bmN0aW9uIGNhbGxpbmcgbW9kZS4gVGhpcyB2YWx1ZSBzaG91bGQgbm90IGJlIHVzZWQuXG4gICAgRnVuY3Rpb25DYWxsaW5nTW9kZVtcIk1PREVfVU5TUEVDSUZJRURcIl0gPSBcIk1PREVfVU5TUEVDSUZJRURcIjtcbiAgICAvLyBEZWZhdWx0IG1vZGVsIGJlaGF2aW9yLCBtb2RlbCBkZWNpZGVzIHRvIHByZWRpY3QgZWl0aGVyIGEgZnVuY3Rpb24gY2FsbFxuICAgIC8vIG9yIGEgbmF0dXJhbCBsYW5ndWFnZSByZXBzcG9zZS5cbiAgICBGdW5jdGlvbkNhbGxpbmdNb2RlW1wiQVVUT1wiXSA9IFwiQVVUT1wiO1xuICAgIC8vIE1vZGVsIGlzIGNvbnN0cmFpbmVkIHRvIGFsd2F5cyBwcmVkaWN0aW5nIGEgZnVuY3Rpb24gY2FsbCBvbmx5LlxuICAgIC8vIElmIFwiYWxsb3dlZF9mdW5jdGlvbl9uYW1lc1wiIGFyZSBzZXQsIHRoZSBwcmVkaWN0ZWQgZnVuY3Rpb24gY2FsbCB3aWxsIGJlXG4gICAgLy8gbGltaXRlZCB0byBhbnkgb25lIG9mIFwiYWxsb3dlZF9mdW5jdGlvbl9uYW1lc1wiLCBlbHNlIHRoZSBwcmVkaWN0ZWRcbiAgICAvLyBmdW5jdGlvbiBjYWxsIHdpbGwgYmUgYW55IG9uZSBvZiB0aGUgcHJvdmlkZWQgXCJmdW5jdGlvbl9kZWNsYXJhdGlvbnNcIi5cbiAgICBGdW5jdGlvbkNhbGxpbmdNb2RlW1wiQU5ZXCJdID0gXCJBTllcIjtcbiAgICAvLyBNb2RlbCB3aWxsIG5vdCBwcmVkaWN0IGFueSBmdW5jdGlvbiBjYWxsLiBNb2RlbCBiZWhhdmlvciBpcyBzYW1lIGFzIHdoZW5cbiAgICAvLyBub3QgcGFzc2luZyBhbnkgZnVuY3Rpb24gZGVjbGFyYXRpb25zLlxuICAgIEZ1bmN0aW9uQ2FsbGluZ01vZGVbXCJOT05FXCJdID0gXCJOT05FXCI7XG59KShGdW5jdGlvbkNhbGxpbmdNb2RlIHx8IChGdW5jdGlvbkNhbGxpbmdNb2RlID0ge30pKTtcbi8qKlxuICogVGhlIG1vZGUgb2YgdGhlIHByZWRpY3RvciB0byBiZSB1c2VkIGluIGR5bmFtaWMgcmV0cmlldmFsLlxuICogQHB1YmxpY1xuICovXG52YXIgRHluYW1pY1JldHJpZXZhbE1vZGU7XG4oZnVuY3Rpb24gKER5bmFtaWNSZXRyaWV2YWxNb2RlKSB7XG4gICAgLy8gVW5zcGVjaWZpZWQgZnVuY3Rpb24gY2FsbGluZyBtb2RlLiBUaGlzIHZhbHVlIHNob3VsZCBub3QgYmUgdXNlZC5cbiAgICBEeW5hbWljUmV0cmlldmFsTW9kZVtcIk1PREVfVU5TUEVDSUZJRURcIl0gPSBcIk1PREVfVU5TUEVDSUZJRURcIjtcbiAgICAvLyBSdW4gcmV0cmlldmFsIG9ubHkgd2hlbiBzeXN0ZW0gZGVjaWRlcyBpdCBpcyBuZWNlc3NhcnkuXG4gICAgRHluYW1pY1JldHJpZXZhbE1vZGVbXCJNT0RFX0RZTkFNSUNcIl0gPSBcIk1PREVfRFlOQU1JQ1wiO1xufSkoRHluYW1pY1JldHJpZXZhbE1vZGUgfHwgKER5bmFtaWNSZXRyaWV2YWxNb2RlID0ge30pKTtcblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQmFzaWMgZXJyb3IgdHlwZSBmb3IgdGhpcyBTREsuXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIoYFtHb29nbGVHZW5lcmF0aXZlQUkgRXJyb3JdOiAke21lc3NhZ2V9YCk7XG4gICAgfVxufVxuLyoqXG4gKiBFcnJvcnMgaW4gdGhlIGNvbnRlbnRzIG9mIGEgcmVzcG9uc2UgZnJvbSB0aGUgbW9kZWwuIFRoaXMgaW5jbHVkZXMgcGFyc2luZ1xuICogZXJyb3JzLCBvciByZXNwb25zZXMgaW5jbHVkaW5nIGEgc2FmZXR5IGJsb2NrIHJlYXNvbi5cbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgR29vZ2xlR2VuZXJhdGl2ZUFJUmVzcG9uc2VFcnJvciBleHRlbmRzIEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlLCByZXNwb25zZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5yZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgIH1cbn1cbi8qKlxuICogRXJyb3IgY2xhc3MgY292ZXJpbmcgSFRUUCBlcnJvcnMgd2hlbiBjYWxsaW5nIHRoZSBzZXJ2ZXIuIEluY2x1ZGVzIEhUVFBcbiAqIHN0YXR1cywgc3RhdHVzVGV4dCwgYW5kIG9wdGlvbmFsIGRldGFpbHMsIGlmIHByb3ZpZGVkIGluIHRoZSBzZXJ2ZXIgcmVzcG9uc2UuXG4gKiBAcHVibGljXG4gKi9cbmNsYXNzIEdvb2dsZUdlbmVyYXRpdmVBSUZldGNoRXJyb3IgZXh0ZW5kcyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgc3RhdHVzLCBzdGF0dXNUZXh0LCBlcnJvckRldGFpbHMpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xuICAgICAgICB0aGlzLnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xuICAgICAgICB0aGlzLmVycm9yRGV0YWlscyA9IGVycm9yRGV0YWlscztcbiAgICB9XG59XG4vKipcbiAqIEVycm9ycyBpbiB0aGUgY29udGVudHMgb2YgYSByZXF1ZXN0IG9yaWdpbmF0aW5nIGZyb20gdXNlciBpbnB1dC5cbiAqIEBwdWJsaWNcbiAqL1xuY2xhc3MgR29vZ2xlR2VuZXJhdGl2ZUFJUmVxdWVzdElucHV0RXJyb3IgZXh0ZW5kcyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvciB7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jb25zdCBERUZBVUxUX0JBU0VfVVJMID0gXCJodHRwczovL2dlbmVyYXRpdmVsYW5ndWFnZS5nb29nbGVhcGlzLmNvbVwiO1xuY29uc3QgREVGQVVMVF9BUElfVkVSU0lPTiA9IFwidjFiZXRhXCI7XG4vKipcbiAqIFdlIGNhbid0IGByZXF1aXJlYCBwYWNrYWdlLmpzb24gaWYgdGhpcyBydW5zIG9uIHdlYi4gV2Ugd2lsbCB1c2Ugcm9sbHVwIHRvXG4gKiBzd2FwIGluIHRoZSB2ZXJzaW9uIG51bWJlciBoZXJlIGF0IGJ1aWxkIHRpbWUuXG4gKi9cbmNvbnN0IFBBQ0tBR0VfVkVSU0lPTiA9IFwiMC4yMS4wXCI7XG5jb25zdCBQQUNLQUdFX0xPR19IRUFERVIgPSBcImdlbmFpLWpzXCI7XG52YXIgVGFzaztcbihmdW5jdGlvbiAoVGFzaykge1xuICAgIFRhc2tbXCJHRU5FUkFURV9DT05URU5UXCJdID0gXCJnZW5lcmF0ZUNvbnRlbnRcIjtcbiAgICBUYXNrW1wiU1RSRUFNX0dFTkVSQVRFX0NPTlRFTlRcIl0gPSBcInN0cmVhbUdlbmVyYXRlQ29udGVudFwiO1xuICAgIFRhc2tbXCJDT1VOVF9UT0tFTlNcIl0gPSBcImNvdW50VG9rZW5zXCI7XG4gICAgVGFza1tcIkVNQkVEX0NPTlRFTlRcIl0gPSBcImVtYmVkQ29udGVudFwiO1xuICAgIFRhc2tbXCJCQVRDSF9FTUJFRF9DT05URU5UU1wiXSA9IFwiYmF0Y2hFbWJlZENvbnRlbnRzXCI7XG59KShUYXNrIHx8IChUYXNrID0ge30pKTtcbmNsYXNzIFJlcXVlc3RVcmwge1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsLCB0YXNrLCBhcGlLZXksIHN0cmVhbSwgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgICAgICB0aGlzLmFwaUtleSA9IGFwaUtleTtcbiAgICAgICAgdGhpcy5zdHJlYW0gPSBzdHJlYW07XG4gICAgICAgIHRoaXMucmVxdWVzdE9wdGlvbnMgPSByZXF1ZXN0T3B0aW9ucztcbiAgICB9XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGNvbnN0IGFwaVZlcnNpb24gPSAoKF9hID0gdGhpcy5yZXF1ZXN0T3B0aW9ucykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwaVZlcnNpb24pIHx8IERFRkFVTFRfQVBJX1ZFUlNJT047XG4gICAgICAgIGNvbnN0IGJhc2VVcmwgPSAoKF9iID0gdGhpcy5yZXF1ZXN0T3B0aW9ucykgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmJhc2VVcmwpIHx8IERFRkFVTFRfQkFTRV9VUkw7XG4gICAgICAgIGxldCB1cmwgPSBgJHtiYXNlVXJsfS8ke2FwaVZlcnNpb259LyR7dGhpcy5tb2RlbH06JHt0aGlzLnRhc2t9YDtcbiAgICAgICAgaWYgKHRoaXMuc3RyZWFtKSB7XG4gICAgICAgICAgICB1cmwgKz0gXCI/YWx0PXNzZVwiO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfVxufVxuLyoqXG4gKiBTaW1wbGUsIGJ1dCBtYXkgYmVjb21lIG1vcmUgY29tcGxleCBpZiB3ZSBhZGQgbW9yZSB2ZXJzaW9ucyB0byBsb2cuXG4gKi9cbmZ1bmN0aW9uIGdldENsaWVudEhlYWRlcnMocmVxdWVzdE9wdGlvbnMpIHtcbiAgICBjb25zdCBjbGllbnRIZWFkZXJzID0gW107XG4gICAgaWYgKHJlcXVlc3RPcHRpb25zID09PSBudWxsIHx8IHJlcXVlc3RPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXF1ZXN0T3B0aW9ucy5hcGlDbGllbnQpIHtcbiAgICAgICAgY2xpZW50SGVhZGVycy5wdXNoKHJlcXVlc3RPcHRpb25zLmFwaUNsaWVudCk7XG4gICAgfVxuICAgIGNsaWVudEhlYWRlcnMucHVzaChgJHtQQUNLQUdFX0xPR19IRUFERVJ9LyR7UEFDS0FHRV9WRVJTSU9OfWApO1xuICAgIHJldHVybiBjbGllbnRIZWFkZXJzLmpvaW4oXCIgXCIpO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0SGVhZGVycyh1cmwpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwieC1nb29nLWFwaS1jbGllbnRcIiwgZ2V0Q2xpZW50SGVhZGVycyh1cmwucmVxdWVzdE9wdGlvbnMpKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIngtZ29vZy1hcGkta2V5XCIsIHVybC5hcGlLZXkpO1xuICAgIGxldCBjdXN0b21IZWFkZXJzID0gKF9hID0gdXJsLnJlcXVlc3RPcHRpb25zKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY3VzdG9tSGVhZGVycztcbiAgICBpZiAoY3VzdG9tSGVhZGVycykge1xuICAgICAgICBpZiAoIShjdXN0b21IZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY3VzdG9tSGVhZGVycyA9IG5ldyBIZWFkZXJzKGN1c3RvbUhlYWRlcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVxdWVzdElucHV0RXJyb3IoYHVuYWJsZSB0byBjb252ZXJ0IGN1c3RvbUhlYWRlcnMgdmFsdWUgJHtKU09OLnN0cmluZ2lmeShjdXN0b21IZWFkZXJzKX0gdG8gSGVhZGVyczogJHtlLm1lc3NhZ2V9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBbaGVhZGVyTmFtZSwgaGVhZGVyVmFsdWVdIG9mIGN1c3RvbUhlYWRlcnMuZW50cmllcygpKSB7XG4gICAgICAgICAgICBpZiAoaGVhZGVyTmFtZSA9PT0gXCJ4LWdvb2ctYXBpLWtleVwiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSVJlcXVlc3RJbnB1dEVycm9yKGBDYW5ub3Qgc2V0IHJlc2VydmVkIGhlYWRlciBuYW1lICR7aGVhZGVyTmFtZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhlYWRlck5hbWUgPT09IFwieC1nb29nLWFwaS1jbGllbnRcIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlSZXF1ZXN0SW5wdXRFcnJvcihgSGVhZGVyIG5hbWUgJHtoZWFkZXJOYW1lfSBjYW4gb25seSBiZSBzZXQgdXNpbmcgdGhlIGFwaUNsaWVudCBmaWVsZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVycy5hcHBlbmQoaGVhZGVyTmFtZSwgaGVhZGVyVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBoZWFkZXJzO1xufVxuYXN5bmMgZnVuY3Rpb24gY29uc3RydWN0TW9kZWxSZXF1ZXN0KG1vZGVsLCB0YXNrLCBhcGlLZXksIHN0cmVhbSwgYm9keSwgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICBjb25zdCB1cmwgPSBuZXcgUmVxdWVzdFVybChtb2RlbCwgdGFzaywgYXBpS2V5LCBzdHJlYW0sIHJlcXVlc3RPcHRpb25zKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHVybC50b1N0cmluZygpLFxuICAgICAgICBmZXRjaE9wdGlvbnM6IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYnVpbGRGZXRjaE9wdGlvbnMocmVxdWVzdE9wdGlvbnMpKSwgeyBtZXRob2Q6IFwiUE9TVFwiLCBoZWFkZXJzOiBhd2FpdCBnZXRIZWFkZXJzKHVybCksIGJvZHkgfSksXG4gICAgfTtcbn1cbmFzeW5jIGZ1bmN0aW9uIG1ha2VNb2RlbFJlcXVlc3QobW9kZWwsIHRhc2ssIGFwaUtleSwgc3RyZWFtLCBib2R5LCByZXF1ZXN0T3B0aW9ucyA9IHt9LCBcbi8vIEFsbG93cyB0aGlzIHRvIGJlIHN0dWJiZWQgZm9yIHRlc3RzXG5mZXRjaEZuID0gZmV0Y2gpIHtcbiAgICBjb25zdCB7IHVybCwgZmV0Y2hPcHRpb25zIH0gPSBhd2FpdCBjb25zdHJ1Y3RNb2RlbFJlcXVlc3QobW9kZWwsIHRhc2ssIGFwaUtleSwgc3RyZWFtLCBib2R5LCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgcmV0dXJuIG1ha2VSZXF1ZXN0KHVybCwgZmV0Y2hPcHRpb25zLCBmZXRjaEZuKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIG1ha2VSZXF1ZXN0KHVybCwgZmV0Y2hPcHRpb25zLCBmZXRjaEZuID0gZmV0Y2gpIHtcbiAgICBsZXQgcmVzcG9uc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaEZuKHVybCwgZmV0Y2hPcHRpb25zKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgaGFuZGxlUmVzcG9uc2VFcnJvcihlLCB1cmwpO1xuICAgIH1cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGF3YWl0IGhhbmRsZVJlc3BvbnNlTm90T2socmVzcG9uc2UsIHVybCk7XG4gICAgfVxuICAgIHJldHVybiByZXNwb25zZTtcbn1cbmZ1bmN0aW9uIGhhbmRsZVJlc3BvbnNlRXJyb3IoZSwgdXJsKSB7XG4gICAgbGV0IGVyciA9IGU7XG4gICAgaWYgKCEoZSBpbnN0YW5jZW9mIEdvb2dsZUdlbmVyYXRpdmVBSUZldGNoRXJyb3IgfHxcbiAgICAgICAgZSBpbnN0YW5jZW9mIEdvb2dsZUdlbmVyYXRpdmVBSVJlcXVlc3RJbnB1dEVycm9yKSkge1xuICAgICAgICBlcnIgPSBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3IoYEVycm9yIGZldGNoaW5nIGZyb20gJHt1cmwudG9TdHJpbmcoKX06ICR7ZS5tZXNzYWdlfWApO1xuICAgICAgICBlcnIuc3RhY2sgPSBlLnN0YWNrO1xuICAgIH1cbiAgICB0aHJvdyBlcnI7XG59XG5hc3luYyBmdW5jdGlvbiBoYW5kbGVSZXNwb25zZU5vdE9rKHJlc3BvbnNlLCB1cmwpIHtcbiAgICBsZXQgbWVzc2FnZSA9IFwiXCI7XG4gICAgbGV0IGVycm9yRGV0YWlscztcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBtZXNzYWdlID0ganNvbi5lcnJvci5tZXNzYWdlO1xuICAgICAgICBpZiAoanNvbi5lcnJvci5kZXRhaWxzKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGAgJHtKU09OLnN0cmluZ2lmeShqc29uLmVycm9yLmRldGFpbHMpfWA7XG4gICAgICAgICAgICBlcnJvckRldGFpbHMgPSBqc29uLmVycm9yLmRldGFpbHM7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaWdub3JlZFxuICAgIH1cbiAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJRmV0Y2hFcnJvcihgRXJyb3IgZmV0Y2hpbmcgZnJvbSAke3VybC50b1N0cmluZygpfTogWyR7cmVzcG9uc2Uuc3RhdHVzfSAke3Jlc3BvbnNlLnN0YXR1c1RleHR9XSAke21lc3NhZ2V9YCwgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS5zdGF0dXNUZXh0LCBlcnJvckRldGFpbHMpO1xufVxuLyoqXG4gKiBHZW5lcmF0ZXMgdGhlIHJlcXVlc3Qgb3B0aW9ucyB0byBiZSBwYXNzZWQgdG8gdGhlIGZldGNoIEFQSS5cbiAqIEBwYXJhbSByZXF1ZXN0T3B0aW9ucyAtIFRoZSB1c2VyLWRlZmluZWQgcmVxdWVzdCBvcHRpb25zLlxuICogQHJldHVybnMgVGhlIGdlbmVyYXRlZCByZXF1ZXN0IG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkRmV0Y2hPcHRpb25zKHJlcXVlc3RPcHRpb25zKSB7XG4gICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge307XG4gICAgaWYgKChyZXF1ZXN0T3B0aW9ucyA9PT0gbnVsbCB8fCByZXF1ZXN0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVxdWVzdE9wdGlvbnMuc2lnbmFsKSAhPT0gdW5kZWZpbmVkIHx8IChyZXF1ZXN0T3B0aW9ucyA9PT0gbnVsbCB8fCByZXF1ZXN0T3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVxdWVzdE9wdGlvbnMudGltZW91dCkgPj0gMCkge1xuICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICBpZiAoKHJlcXVlc3RPcHRpb25zID09PSBudWxsIHx8IHJlcXVlc3RPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXF1ZXN0T3B0aW9ucy50aW1lb3V0KSA+PSAwKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNvbnRyb2xsZXIuYWJvcnQoKSwgcmVxdWVzdE9wdGlvbnMudGltZW91dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcXVlc3RPcHRpb25zID09PSBudWxsIHx8IHJlcXVlc3RPcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZXF1ZXN0T3B0aW9ucy5zaWduYWwpIHtcbiAgICAgICAgICAgIHJlcXVlc3RPcHRpb25zLnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuYWJvcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGZldGNoT3B0aW9ucy5zaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbDtcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoT3B0aW9ucztcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogQWRkcyBjb252ZW5pZW5jZSBoZWxwZXIgbWV0aG9kcyB0byBhIHJlc3BvbnNlIG9iamVjdCwgaW5jbHVkaW5nIHN0cmVhbVxuICogY2h1bmtzIChhcyBsb25nIGFzIGVhY2ggY2h1bmsgaXMgYSBjb21wbGV0ZSBHZW5lcmF0ZUNvbnRlbnRSZXNwb25zZSBKU09OKS5cbiAqL1xuZnVuY3Rpb24gYWRkSGVscGVycyhyZXNwb25zZSkge1xuICAgIHJlc3BvbnNlLnRleHQgPSAoKSA9PiB7XG4gICAgICAgIGlmIChyZXNwb25zZS5jYW5kaWRhdGVzICYmIHJlc3BvbnNlLmNhbmRpZGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmRpZGF0ZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVGhpcyByZXNwb25zZSBoYWQgJHtyZXNwb25zZS5jYW5kaWRhdGVzLmxlbmd0aH0gYCArXG4gICAgICAgICAgICAgICAgICAgIGBjYW5kaWRhdGVzLiBSZXR1cm5pbmcgdGV4dCBmcm9tIHRoZSBmaXJzdCBjYW5kaWRhdGUgb25seS4gYCArXG4gICAgICAgICAgICAgICAgICAgIGBBY2Nlc3MgcmVzcG9uc2UuY2FuZGlkYXRlcyBkaXJlY3RseSB0byB1c2UgdGhlIG90aGVyIGNhbmRpZGF0ZXMuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFkQmFkRmluaXNoUmVhc29uKHJlc3BvbnNlLmNhbmRpZGF0ZXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSVJlc3BvbnNlRXJyb3IoYCR7Zm9ybWF0QmxvY2tFcnJvck1lc3NhZ2UocmVzcG9uc2UpfWAsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBnZXRUZXh0KHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5wcm9tcHRGZWVkYmFjaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSVJlc3BvbnNlRXJyb3IoYFRleHQgbm90IGF2YWlsYWJsZS4gJHtmb3JtYXRCbG9ja0Vycm9yTWVzc2FnZShyZXNwb25zZSl9YCwgcmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVE9ETzogcmVtb3ZlIGF0IG5leHQgbWFqb3IgdmVyc2lvblxuICAgICAqL1xuICAgIHJlc3BvbnNlLmZ1bmN0aW9uQ2FsbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmRpZGF0ZXMgJiYgcmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBUaGlzIHJlc3BvbnNlIGhhZCAke3Jlc3BvbnNlLmNhbmRpZGF0ZXMubGVuZ3RofSBgICtcbiAgICAgICAgICAgICAgICAgICAgYGNhbmRpZGF0ZXMuIFJldHVybmluZyBmdW5jdGlvbiBjYWxscyBmcm9tIHRoZSBmaXJzdCBjYW5kaWRhdGUgb25seS4gYCArXG4gICAgICAgICAgICAgICAgICAgIGBBY2Nlc3MgcmVzcG9uc2UuY2FuZGlkYXRlcyBkaXJlY3RseSB0byB1c2UgdGhlIG90aGVyIGNhbmRpZGF0ZXMuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaGFkQmFkRmluaXNoUmVhc29uKHJlc3BvbnNlLmNhbmRpZGF0ZXNbMF0pKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSVJlc3BvbnNlRXJyb3IoYCR7Zm9ybWF0QmxvY2tFcnJvck1lc3NhZ2UocmVzcG9uc2UpfWAsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgcmVzcG9uc2UuZnVuY3Rpb25DYWxsKCkgaXMgZGVwcmVjYXRlZC4gYCArXG4gICAgICAgICAgICAgICAgYFVzZSByZXNwb25zZS5mdW5jdGlvbkNhbGxzKCkgaW5zdGVhZC5gKTtcbiAgICAgICAgICAgIHJldHVybiBnZXRGdW5jdGlvbkNhbGxzKHJlc3BvbnNlKVswXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChyZXNwb25zZS5wcm9tcHRGZWVkYmFjaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSVJlc3BvbnNlRXJyb3IoYEZ1bmN0aW9uIGNhbGwgbm90IGF2YWlsYWJsZS4gJHtmb3JtYXRCbG9ja0Vycm9yTWVzc2FnZShyZXNwb25zZSl9YCwgcmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfTtcbiAgICByZXNwb25zZS5mdW5jdGlvbkNhbGxzID0gKCkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2UuY2FuZGlkYXRlcyAmJiByZXNwb25zZS5jYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5jYW5kaWRhdGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFRoaXMgcmVzcG9uc2UgaGFkICR7cmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGh9IGAgK1xuICAgICAgICAgICAgICAgICAgICBgY2FuZGlkYXRlcy4gUmV0dXJuaW5nIGZ1bmN0aW9uIGNhbGxzIGZyb20gdGhlIGZpcnN0IGNhbmRpZGF0ZSBvbmx5LiBgICtcbiAgICAgICAgICAgICAgICAgICAgYEFjY2VzcyByZXNwb25zZS5jYW5kaWRhdGVzIGRpcmVjdGx5IHRvIHVzZSB0aGUgb3RoZXIgY2FuZGlkYXRlcy5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChoYWRCYWRGaW5pc2hSZWFzb24ocmVzcG9uc2UuY2FuZGlkYXRlc1swXSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVzcG9uc2VFcnJvcihgJHtmb3JtYXRCbG9ja0Vycm9yTWVzc2FnZShyZXNwb25zZSl9YCwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZ1bmN0aW9uQ2FsbHMocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlc3BvbnNlLnByb21wdEZlZWRiYWNrKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVzcG9uc2VFcnJvcihgRnVuY3Rpb24gY2FsbCBub3QgYXZhaWxhYmxlLiAke2Zvcm1hdEJsb2NrRXJyb3JNZXNzYWdlKHJlc3BvbnNlKX1gLCByZXNwb25zZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9O1xuICAgIHJldHVybiByZXNwb25zZTtcbn1cbi8qKlxuICogUmV0dXJucyBhbGwgdGV4dCBmb3VuZCBpbiBhbGwgcGFydHMgb2YgZmlyc3QgY2FuZGlkYXRlLlxuICovXG5mdW5jdGlvbiBnZXRUZXh0KHJlc3BvbnNlKSB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgIGNvbnN0IHRleHRTdHJpbmdzID0gW107XG4gICAgaWYgKChfYiA9IChfYSA9IHJlc3BvbnNlLmNhbmRpZGF0ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXS5jb250ZW50KSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IucGFydHMpIHtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIChfZCA9IChfYyA9IHJlc3BvbnNlLmNhbmRpZGF0ZXMpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY1swXS5jb250ZW50KSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QucGFydHMpIHtcbiAgICAgICAgICAgIGlmIChwYXJ0LnRleHQpIHtcbiAgICAgICAgICAgICAgICB0ZXh0U3RyaW5ncy5wdXNoKHBhcnQudGV4dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFydC5leGVjdXRhYmxlQ29kZSkge1xuICAgICAgICAgICAgICAgIHRleHRTdHJpbmdzLnB1c2goXCJcXG5gYGBcIiArXG4gICAgICAgICAgICAgICAgICAgIHBhcnQuZXhlY3V0YWJsZUNvZGUubGFuZ3VhZ2UgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcblwiICtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5leGVjdXRhYmxlQ29kZS5jb2RlICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG5gYGBcXG5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFydC5jb2RlRXhlY3V0aW9uUmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgdGV4dFN0cmluZ3MucHVzaChcIlxcbmBgYFxcblwiICsgcGFydC5jb2RlRXhlY3V0aW9uUmVzdWx0Lm91dHB1dCArIFwiXFxuYGBgXFxuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0ZXh0U3RyaW5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiB0ZXh0U3RyaW5ncy5qb2luKFwiXCIpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxufVxuLyoqXG4gKiBSZXR1cm5zIGZ1bmN0aW9uQ2FsbCBvZiBmaXJzdCBjYW5kaWRhdGUuXG4gKi9cbmZ1bmN0aW9uIGdldEZ1bmN0aW9uQ2FsbHMocmVzcG9uc2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgY29uc3QgZnVuY3Rpb25DYWxscyA9IFtdO1xuICAgIGlmICgoX2IgPSAoX2EgPSByZXNwb25zZS5jYW5kaWRhdGVzKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbMF0uY29udGVudCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnBhcnRzKSB7XG4gICAgICAgIGZvciAoY29uc3QgcGFydCBvZiAoX2QgPSAoX2MgPSByZXNwb25zZS5jYW5kaWRhdGVzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NbMF0uY29udGVudCkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnBhcnRzKSB7XG4gICAgICAgICAgICBpZiAocGFydC5mdW5jdGlvbkNhbGwpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbkNhbGxzLnB1c2gocGFydC5mdW5jdGlvbkNhbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmdW5jdGlvbkNhbGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uQ2FsbHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbn1cbmNvbnN0IGJhZEZpbmlzaFJlYXNvbnMgPSBbXG4gICAgRmluaXNoUmVhc29uLlJFQ0lUQVRJT04sXG4gICAgRmluaXNoUmVhc29uLlNBRkVUWSxcbiAgICBGaW5pc2hSZWFzb24uTEFOR1VBR0UsXG5dO1xuZnVuY3Rpb24gaGFkQmFkRmluaXNoUmVhc29uKGNhbmRpZGF0ZSkge1xuICAgIHJldHVybiAoISFjYW5kaWRhdGUuZmluaXNoUmVhc29uICYmXG4gICAgICAgIGJhZEZpbmlzaFJlYXNvbnMuaW5jbHVkZXMoY2FuZGlkYXRlLmZpbmlzaFJlYXNvbikpO1xufVxuZnVuY3Rpb24gZm9ybWF0QmxvY2tFcnJvck1lc3NhZ2UocmVzcG9uc2UpIHtcbiAgICB2YXIgX2EsIF9iLCBfYztcbiAgICBsZXQgbWVzc2FnZSA9IFwiXCI7XG4gICAgaWYgKCghcmVzcG9uc2UuY2FuZGlkYXRlcyB8fCByZXNwb25zZS5jYW5kaWRhdGVzLmxlbmd0aCA9PT0gMCkgJiZcbiAgICAgICAgcmVzcG9uc2UucHJvbXB0RmVlZGJhY2spIHtcbiAgICAgICAgbWVzc2FnZSArPSBcIlJlc3BvbnNlIHdhcyBibG9ja2VkXCI7XG4gICAgICAgIGlmICgoX2EgPSByZXNwb25zZS5wcm9tcHRGZWVkYmFjaykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmJsb2NrUmVhc29uKSB7XG4gICAgICAgICAgICBtZXNzYWdlICs9IGAgZHVlIHRvICR7cmVzcG9uc2UucHJvbXB0RmVlZGJhY2suYmxvY2tSZWFzb259YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKF9iID0gcmVzcG9uc2UucHJvbXB0RmVlZGJhY2spID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5ibG9ja1JlYXNvbk1lc3NhZ2UpIHtcbiAgICAgICAgICAgIG1lc3NhZ2UgKz0gYDogJHtyZXNwb25zZS5wcm9tcHRGZWVkYmFjay5ibG9ja1JlYXNvbk1lc3NhZ2V9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICgoX2MgPSByZXNwb25zZS5jYW5kaWRhdGVzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2NbMF0pIHtcbiAgICAgICAgY29uc3QgZmlyc3RDYW5kaWRhdGUgPSByZXNwb25zZS5jYW5kaWRhdGVzWzBdO1xuICAgICAgICBpZiAoaGFkQmFkRmluaXNoUmVhc29uKGZpcnN0Q2FuZGlkYXRlKSkge1xuICAgICAgICAgICAgbWVzc2FnZSArPSBgQ2FuZGlkYXRlIHdhcyBibG9ja2VkIGR1ZSB0byAke2ZpcnN0Q2FuZGlkYXRlLmZpbmlzaFJlYXNvbn1gO1xuICAgICAgICAgICAgaWYgKGZpcnN0Q2FuZGlkYXRlLmZpbmlzaE1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlICs9IGA6ICR7Zmlyc3RDYW5kaWRhdGUuZmluaXNoTWVzc2FnZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtZXNzYWdlO1xufVxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UsIFN1cHByZXNzZWRFcnJvciwgU3ltYm9sICovXHJcblxyXG5cclxuZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxudHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XHJcbiAgICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XHJcbn07XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5jb25zdCByZXNwb25zZUxpbmVSRSA9IC9eZGF0YVxcOiAoLiopKD86XFxuXFxufFxcclxccnxcXHJcXG5cXHJcXG4pLztcbi8qKlxuICogUHJvY2VzcyBhIHJlc3BvbnNlLmJvZHkgc3RyZWFtIGZyb20gdGhlIGJhY2tlbmQgYW5kIHJldHVybiBhblxuICogaXRlcmF0b3IgdGhhdCBwcm92aWRlcyBvbmUgY29tcGxldGUgR2VuZXJhdGVDb250ZW50UmVzcG9uc2UgYXQgYSB0aW1lXG4gKiBhbmQgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIHNpbmdsZSBhZ2dyZWdhdGVkXG4gKiBHZW5lcmF0ZUNvbnRlbnRSZXNwb25zZS5cbiAqXG4gKiBAcGFyYW0gcmVzcG9uc2UgLSBSZXNwb25zZSBmcm9tIGEgZmV0Y2ggY2FsbFxuICovXG5mdW5jdGlvbiBwcm9jZXNzU3RyZWFtKHJlc3BvbnNlKSB7XG4gICAgY29uc3QgaW5wdXRTdHJlYW0gPSByZXNwb25zZS5ib2R5LnBpcGVUaHJvdWdoKG5ldyBUZXh0RGVjb2RlclN0cmVhbShcInV0ZjhcIiwgeyBmYXRhbDogdHJ1ZSB9KSk7XG4gICAgY29uc3QgcmVzcG9uc2VTdHJlYW0gPSBnZXRSZXNwb25zZVN0cmVhbShpbnB1dFN0cmVhbSk7XG4gICAgY29uc3QgW3N0cmVhbTEsIHN0cmVhbTJdID0gcmVzcG9uc2VTdHJlYW0udGVlKCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RyZWFtOiBnZW5lcmF0ZVJlc3BvbnNlU2VxdWVuY2Uoc3RyZWFtMSksXG4gICAgICAgIHJlc3BvbnNlOiBnZXRSZXNwb25zZVByb21pc2Uoc3RyZWFtMiksXG4gICAgfTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGdldFJlc3BvbnNlUHJvbWlzZShzdHJlYW0pIHtcbiAgICBjb25zdCBhbGxSZXNwb25zZXMgPSBbXTtcbiAgICBjb25zdCByZWFkZXIgPSBzdHJlYW0uZ2V0UmVhZGVyKCk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgeyBkb25lLCB2YWx1ZSB9ID0gYXdhaXQgcmVhZGVyLnJlYWQoKTtcbiAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBhZGRIZWxwZXJzKGFnZ3JlZ2F0ZVJlc3BvbnNlcyhhbGxSZXNwb25zZXMpKTtcbiAgICAgICAgfVxuICAgICAgICBhbGxSZXNwb25zZXMucHVzaCh2YWx1ZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gZ2VuZXJhdGVSZXNwb25zZVNlcXVlbmNlKHN0cmVhbSkge1xuICAgIHJldHVybiBfX2FzeW5jR2VuZXJhdG9yKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24qIGdlbmVyYXRlUmVzcG9uc2VTZXF1ZW5jZV8xKCkge1xuICAgICAgICBjb25zdCByZWFkZXIgPSBzdHJlYW0uZ2V0UmVhZGVyKCk7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSB5aWVsZCBfX2F3YWl0KHJlYWRlci5yZWFkKCkpO1xuICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHlpZWxkIHlpZWxkIF9fYXdhaXQoYWRkSGVscGVycyh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4vKipcbiAqIFJlYWRzIGEgcmF3IHN0cmVhbSBmcm9tIHRoZSBmZXRjaCByZXNwb25zZSBhbmQgam9pbiBpbmNvbXBsZXRlXG4gKiBjaHVua3MsIHJldHVybmluZyBhIG5ldyBzdHJlYW0gdGhhdCBwcm92aWRlcyBhIHNpbmdsZSBjb21wbGV0ZVxuICogR2VuZXJhdGVDb250ZW50UmVzcG9uc2UgaW4gZWFjaCBpdGVyYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGdldFJlc3BvbnNlU3RyZWFtKGlucHV0U3RyZWFtKSB7XG4gICAgY29uc3QgcmVhZGVyID0gaW5wdXRTdHJlYW0uZ2V0UmVhZGVyKCk7XG4gICAgY29uc3Qgc3RyZWFtID0gbmV3IFJlYWRhYmxlU3RyZWFtKHtcbiAgICAgICAgc3RhcnQoY29udHJvbGxlcikge1xuICAgICAgICAgICAgbGV0IGN1cnJlbnRUZXh0ID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiBwdW1wKCk7XG4gICAgICAgICAgICBmdW5jdGlvbiBwdW1wKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZWFkZXIucmVhZCgpLnRoZW4oKHsgdmFsdWUsIGRvbmUgfSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRUZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZXJyb3IobmV3IEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yKFwiRmFpbGVkIHRvIHBhcnNlIHN0cmVhbVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlci5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUZXh0ICs9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2ggPSBjdXJyZW50VGV4dC5tYXRjaChyZXNwb25zZUxpbmVSRSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZWRSZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZFJlc3BvbnNlID0gSlNPTi5wYXJzZShtYXRjaFsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIuZXJyb3IobmV3IEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yKGBFcnJvciBwYXJzaW5nIEpTT04gcmVzcG9uc2U6IFwiJHttYXRjaFsxXX1cImApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyLmVucXVldWUocGFyc2VkUmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRleHQgPSBjdXJyZW50VGV4dC5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoID0gY3VycmVudFRleHQubWF0Y2gocmVzcG9uc2VMaW5lUkUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwdW1wKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHN0cmVhbTtcbn1cbi8qKlxuICogQWdncmVnYXRlcyBhbiBhcnJheSBvZiBgR2VuZXJhdGVDb250ZW50UmVzcG9uc2VgcyBpbnRvIGEgc2luZ2xlXG4gKiBHZW5lcmF0ZUNvbnRlbnRSZXNwb25zZS5cbiAqL1xuZnVuY3Rpb24gYWdncmVnYXRlUmVzcG9uc2VzKHJlc3BvbnNlcykge1xuICAgIGNvbnN0IGxhc3RSZXNwb25zZSA9IHJlc3BvbnNlc1tyZXNwb25zZXMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgYWdncmVnYXRlZFJlc3BvbnNlID0ge1xuICAgICAgICBwcm9tcHRGZWVkYmFjazogbGFzdFJlc3BvbnNlID09PSBudWxsIHx8IGxhc3RSZXNwb25zZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogbGFzdFJlc3BvbnNlLnByb21wdEZlZWRiYWNrLFxuICAgIH07XG4gICAgZm9yIChjb25zdCByZXNwb25zZSBvZiByZXNwb25zZXMpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmNhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY2FuZGlkYXRlIG9mIHJlc3BvbnNlLmNhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpID0gY2FuZGlkYXRlLmluZGV4O1xuICAgICAgICAgICAgICAgIGlmICghYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFhZ2dyZWdhdGVkUmVzcG9uc2UuY2FuZGlkYXRlc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBhZ2dyZWdhdGVkUmVzcG9uc2UuY2FuZGlkYXRlc1tpXSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4OiBjYW5kaWRhdGUuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEtlZXAgb3ZlcndyaXRpbmcsIHRoZSBsYXN0IG9uZSB3aWxsIGJlIGZpbmFsXG4gICAgICAgICAgICAgICAgYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXNbaV0uY2l0YXRpb25NZXRhZGF0YSA9XG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5jaXRhdGlvbk1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2ldLmdyb3VuZGluZ01ldGFkYXRhID1cbiAgICAgICAgICAgICAgICAgICAgY2FuZGlkYXRlLmdyb3VuZGluZ01ldGFkYXRhO1xuICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2ldLmZpbmlzaFJlYXNvbiA9IGNhbmRpZGF0ZS5maW5pc2hSZWFzb247XG4gICAgICAgICAgICAgICAgYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXNbaV0uZmluaXNoTWVzc2FnZSA9XG4gICAgICAgICAgICAgICAgICAgIGNhbmRpZGF0ZS5maW5pc2hNZXNzYWdlO1xuICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2ldLnNhZmV0eVJhdGluZ3MgPVxuICAgICAgICAgICAgICAgICAgICBjYW5kaWRhdGUuc2FmZXR5UmF0aW5ncztcbiAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgKiBDYW5kaWRhdGVzIHNob3VsZCBhbHdheXMgaGF2ZSBjb250ZW50IGFuZCBwYXJ0cywgYnV0IHRoaXMgaGFuZGxlc1xuICAgICAgICAgICAgICAgICAqIHBvc3NpYmxlIG1hbGZvcm1lZCByZXNwb25zZXMuXG4gICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZS5jb250ZW50ICYmIGNhbmRpZGF0ZS5jb250ZW50LnBhcnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXNbaV0uY29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWdncmVnYXRlZFJlc3BvbnNlLmNhbmRpZGF0ZXNbaV0uY29udGVudCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlOiBjYW5kaWRhdGUuY29udGVudC5yb2xlIHx8IFwidXNlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3UGFydCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhcnQgb2YgY2FuZGlkYXRlLmNvbnRlbnQucGFydHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0LnRleHQgPSBwYXJ0LnRleHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFydC5mdW5jdGlvbkNhbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0LmZ1bmN0aW9uQ2FsbCA9IHBhcnQuZnVuY3Rpb25DYWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnQuZXhlY3V0YWJsZUNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0LmV4ZWN1dGFibGVDb2RlID0gcGFydC5leGVjdXRhYmxlQ29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LmNvZGVFeGVjdXRpb25SZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdQYXJ0LmNvZGVFeGVjdXRpb25SZXN1bHQgPSBwYXJ0LmNvZGVFeGVjdXRpb25SZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMobmV3UGFydCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UGFydC50ZXh0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFnZ3JlZ2F0ZWRSZXNwb25zZS5jYW5kaWRhdGVzW2ldLmNvbnRlbnQucGFydHMucHVzaChuZXdQYXJ0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2UudXNhZ2VNZXRhZGF0YSkge1xuICAgICAgICAgICAgYWdncmVnYXRlZFJlc3BvbnNlLnVzYWdlTWV0YWRhdGEgPSByZXNwb25zZS51c2FnZU1ldGFkYXRhO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhZ2dyZWdhdGVkUmVzcG9uc2U7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5hc3luYyBmdW5jdGlvbiBnZW5lcmF0ZUNvbnRlbnRTdHJlYW0oYXBpS2V5LCBtb2RlbCwgcGFyYW1zLCByZXF1ZXN0T3B0aW9ucykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbWFrZU1vZGVsUmVxdWVzdChtb2RlbCwgVGFzay5TVFJFQU1fR0VORVJBVEVfQ09OVEVOVCwgYXBpS2V5LCBcbiAgICAvKiBzdHJlYW0gKi8gdHJ1ZSwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIHJldHVybiBwcm9jZXNzU3RyZWFtKHJlc3BvbnNlKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyYXRlQ29udGVudChhcGlLZXksIG1vZGVsLCBwYXJhbXMsIHJlcXVlc3RPcHRpb25zKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWtlTW9kZWxSZXF1ZXN0KG1vZGVsLCBUYXNrLkdFTkVSQVRFX0NPTlRFTlQsIGFwaUtleSwgXG4gICAgLyogc3RyZWFtICovIGZhbHNlLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnN0IGVuaGFuY2VkUmVzcG9uc2UgPSBhZGRIZWxwZXJzKHJlc3BvbnNlSnNvbik7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcmVzcG9uc2U6IGVuaGFuY2VkUmVzcG9uc2UsXG4gICAgfTtcbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdFN5c3RlbUluc3RydWN0aW9uKGlucHV0KSB7XG4gICAgLy8gbnVsbCBvciB1bmRlZmluZWRcbiAgICBpZiAoaW5wdXQgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHsgcm9sZTogXCJzeXN0ZW1cIiwgcGFydHM6IFt7IHRleHQ6IGlucHV0IH1dIH07XG4gICAgfVxuICAgIGVsc2UgaWYgKGlucHV0LnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHsgcm9sZTogXCJzeXN0ZW1cIiwgcGFydHM6IFtpbnB1dF0gfTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaW5wdXQucGFydHMpIHtcbiAgICAgICAgaWYgKCFpbnB1dC5yb2xlKSB7XG4gICAgICAgICAgICByZXR1cm4geyByb2xlOiBcInN5c3RlbVwiLCBwYXJ0czogaW5wdXQucGFydHMgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbnB1dDtcbiAgICAgICAgfVxuICAgIH1cbn1cbmZ1bmN0aW9uIGZvcm1hdE5ld0NvbnRlbnQocmVxdWVzdCkge1xuICAgIGxldCBuZXdQYXJ0cyA9IFtdO1xuICAgIGlmICh0eXBlb2YgcmVxdWVzdCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBuZXdQYXJ0cyA9IFt7IHRleHQ6IHJlcXVlc3QgfV07XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmb3IgKGNvbnN0IHBhcnRPclN0cmluZyBvZiByZXF1ZXN0KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHBhcnRPclN0cmluZyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIG5ld1BhcnRzLnB1c2goeyB0ZXh0OiBwYXJ0T3JTdHJpbmcgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZXdQYXJ0cy5wdXNoKHBhcnRPclN0cmluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFzc2lnblJvbGVUb1BhcnRzQW5kVmFsaWRhdGVTZW5kTWVzc2FnZVJlcXVlc3QobmV3UGFydHMpO1xufVxuLyoqXG4gKiBXaGVuIG11bHRpcGxlIFBhcnQgdHlwZXMgKGkuZS4gRnVuY3Rpb25SZXNwb25zZVBhcnQgYW5kIFRleHRQYXJ0KSBhcmVcbiAqIHBhc3NlZCBpbiBhIHNpbmdsZSBQYXJ0IGFycmF5LCB3ZSBtYXkgbmVlZCB0byBhc3NpZ24gZGlmZmVyZW50IHJvbGVzIHRvIGVhY2hcbiAqIHBhcnQuIEN1cnJlbnRseSBvbmx5IEZ1bmN0aW9uUmVzcG9uc2VQYXJ0IHJlcXVpcmVzIGEgcm9sZSBvdGhlciB0aGFuICd1c2VyJy5cbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0gcGFydHMgQXJyYXkgb2YgcGFydHMgdG8gcGFzcyB0byB0aGUgbW9kZWxcbiAqIEByZXR1cm5zIEFycmF5IG9mIGNvbnRlbnQgaXRlbXNcbiAqL1xuZnVuY3Rpb24gYXNzaWduUm9sZVRvUGFydHNBbmRWYWxpZGF0ZVNlbmRNZXNzYWdlUmVxdWVzdChwYXJ0cykge1xuICAgIGNvbnN0IHVzZXJDb250ZW50ID0geyByb2xlOiBcInVzZXJcIiwgcGFydHM6IFtdIH07XG4gICAgY29uc3QgZnVuY3Rpb25Db250ZW50ID0geyByb2xlOiBcImZ1bmN0aW9uXCIsIHBhcnRzOiBbXSB9O1xuICAgIGxldCBoYXNVc2VyQ29udGVudCA9IGZhbHNlO1xuICAgIGxldCBoYXNGdW5jdGlvbkNvbnRlbnQgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IHBhcnQgb2YgcGFydHMpIHtcbiAgICAgICAgaWYgKFwiZnVuY3Rpb25SZXNwb25zZVwiIGluIHBhcnQpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uQ29udGVudC5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgICAgaGFzRnVuY3Rpb25Db250ZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVzZXJDb250ZW50LnBhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICBoYXNVc2VyQ29udGVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGhhc1VzZXJDb250ZW50ICYmIGhhc0Z1bmN0aW9uQ29udGVudCkge1xuICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3IoXCJXaXRoaW4gYSBzaW5nbGUgbWVzc2FnZSwgRnVuY3Rpb25SZXNwb25zZSBjYW5ub3QgYmUgbWl4ZWQgd2l0aCBvdGhlciB0eXBlIG9mIHBhcnQgaW4gdGhlIHJlcXVlc3QgZm9yIHNlbmRpbmcgY2hhdCBtZXNzYWdlLlwiKTtcbiAgICB9XG4gICAgaWYgKCFoYXNVc2VyQ29udGVudCAmJiAhaGFzRnVuY3Rpb25Db250ZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvcihcIk5vIGNvbnRlbnQgaXMgcHJvdmlkZWQgZm9yIHNlbmRpbmcgY2hhdCBtZXNzYWdlLlwiKTtcbiAgICB9XG4gICAgaWYgKGhhc1VzZXJDb250ZW50KSB7XG4gICAgICAgIHJldHVybiB1c2VyQ29udGVudDtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uQ29udGVudDtcbn1cbmZ1bmN0aW9uIGZvcm1hdENvdW50VG9rZW5zSW5wdXQocGFyYW1zLCBtb2RlbFBhcmFtcykge1xuICAgIHZhciBfYTtcbiAgICBsZXQgZm9ybWF0dGVkR2VuZXJhdGVDb250ZW50UmVxdWVzdCA9IHtcbiAgICAgICAgbW9kZWw6IG1vZGVsUGFyYW1zID09PSBudWxsIHx8IG1vZGVsUGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbFBhcmFtcy5tb2RlbCxcbiAgICAgICAgZ2VuZXJhdGlvbkNvbmZpZzogbW9kZWxQYXJhbXMgPT09IG51bGwgfHwgbW9kZWxQYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsUGFyYW1zLmdlbmVyYXRpb25Db25maWcsXG4gICAgICAgIHNhZmV0eVNldHRpbmdzOiBtb2RlbFBhcmFtcyA9PT0gbnVsbCB8fCBtb2RlbFBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWxQYXJhbXMuc2FmZXR5U2V0dGluZ3MsXG4gICAgICAgIHRvb2xzOiBtb2RlbFBhcmFtcyA9PT0gbnVsbCB8fCBtb2RlbFBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWxQYXJhbXMudG9vbHMsXG4gICAgICAgIHRvb2xDb25maWc6IG1vZGVsUGFyYW1zID09PSBudWxsIHx8IG1vZGVsUGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbFBhcmFtcy50b29sQ29uZmlnLFxuICAgICAgICBzeXN0ZW1JbnN0cnVjdGlvbjogbW9kZWxQYXJhbXMgPT09IG51bGwgfHwgbW9kZWxQYXJhbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG1vZGVsUGFyYW1zLnN5c3RlbUluc3RydWN0aW9uLFxuICAgICAgICBjYWNoZWRDb250ZW50OiAoX2EgPSBtb2RlbFBhcmFtcyA9PT0gbnVsbCB8fCBtb2RlbFBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWxQYXJhbXMuY2FjaGVkQ29udGVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUsXG4gICAgICAgIGNvbnRlbnRzOiBbXSxcbiAgICB9O1xuICAgIGNvbnN0IGNvbnRhaW5zR2VuZXJhdGVDb250ZW50UmVxdWVzdCA9IHBhcmFtcy5nZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0ICE9IG51bGw7XG4gICAgaWYgKHBhcmFtcy5jb250ZW50cykge1xuICAgICAgICBpZiAoY29udGFpbnNHZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVxdWVzdElucHV0RXJyb3IoXCJDb3VudFRva2Vuc1JlcXVlc3QgbXVzdCBoYXZlIG9uZSBvZiBjb250ZW50cyBvciBnZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0LCBub3QgYm90aC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgZm9ybWF0dGVkR2VuZXJhdGVDb250ZW50UmVxdWVzdC5jb250ZW50cyA9IHBhcmFtcy5jb250ZW50cztcbiAgICB9XG4gICAgZWxzZSBpZiAoY29udGFpbnNHZW5lcmF0ZUNvbnRlbnRSZXF1ZXN0KSB7XG4gICAgICAgIGZvcm1hdHRlZEdlbmVyYXRlQ29udGVudFJlcXVlc3QgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGZvcm1hdHRlZEdlbmVyYXRlQ29udGVudFJlcXVlc3QpLCBwYXJhbXMuZ2VuZXJhdGVDb250ZW50UmVxdWVzdCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBBcnJheSBvciBzdHJpbmdcbiAgICAgICAgY29uc3QgY29udGVudCA9IGZvcm1hdE5ld0NvbnRlbnQocGFyYW1zKTtcbiAgICAgICAgZm9ybWF0dGVkR2VuZXJhdGVDb250ZW50UmVxdWVzdC5jb250ZW50cyA9IFtjb250ZW50XTtcbiAgICB9XG4gICAgcmV0dXJuIHsgZ2VuZXJhdGVDb250ZW50UmVxdWVzdDogZm9ybWF0dGVkR2VuZXJhdGVDb250ZW50UmVxdWVzdCB9O1xufVxuZnVuY3Rpb24gZm9ybWF0R2VuZXJhdGVDb250ZW50SW5wdXQocGFyYW1zKSB7XG4gICAgbGV0IGZvcm1hdHRlZFJlcXVlc3Q7XG4gICAgaWYgKHBhcmFtcy5jb250ZW50cykge1xuICAgICAgICBmb3JtYXR0ZWRSZXF1ZXN0ID0gcGFyYW1zO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gQXJyYXkgb3Igc3RyaW5nXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBmb3JtYXROZXdDb250ZW50KHBhcmFtcyk7XG4gICAgICAgIGZvcm1hdHRlZFJlcXVlc3QgPSB7IGNvbnRlbnRzOiBbY29udGVudF0gfTtcbiAgICB9XG4gICAgaWYgKHBhcmFtcy5zeXN0ZW1JbnN0cnVjdGlvbikge1xuICAgICAgICBmb3JtYXR0ZWRSZXF1ZXN0LnN5c3RlbUluc3RydWN0aW9uID0gZm9ybWF0U3lzdGVtSW5zdHJ1Y3Rpb24ocGFyYW1zLnN5c3RlbUluc3RydWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIGZvcm1hdHRlZFJlcXVlc3Q7XG59XG5mdW5jdGlvbiBmb3JtYXRFbWJlZENvbnRlbnRJbnB1dChwYXJhbXMpIHtcbiAgICBpZiAodHlwZW9mIHBhcmFtcyA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KHBhcmFtcykpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGZvcm1hdE5ld0NvbnRlbnQocGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHsgY29udGVudCB9O1xuICAgIH1cbiAgICByZXR1cm4gcGFyYW1zO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyNCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLy8gaHR0cHM6Ly9haS5nb29nbGUuZGV2L2FwaS9yZXN0L3YxYmV0YS9Db250ZW50I3BhcnRcbmNvbnN0IFZBTElEX1BBUlRfRklFTERTID0gW1xuICAgIFwidGV4dFwiLFxuICAgIFwiaW5saW5lRGF0YVwiLFxuICAgIFwiZnVuY3Rpb25DYWxsXCIsXG4gICAgXCJmdW5jdGlvblJlc3BvbnNlXCIsXG4gICAgXCJleGVjdXRhYmxlQ29kZVwiLFxuICAgIFwiY29kZUV4ZWN1dGlvblJlc3VsdFwiLFxuXTtcbmNvbnN0IFZBTElEX1BBUlRTX1BFUl9ST0xFID0ge1xuICAgIHVzZXI6IFtcInRleHRcIiwgXCJpbmxpbmVEYXRhXCJdLFxuICAgIGZ1bmN0aW9uOiBbXCJmdW5jdGlvblJlc3BvbnNlXCJdLFxuICAgIG1vZGVsOiBbXCJ0ZXh0XCIsIFwiZnVuY3Rpb25DYWxsXCIsIFwiZXhlY3V0YWJsZUNvZGVcIiwgXCJjb2RlRXhlY3V0aW9uUmVzdWx0XCJdLFxuICAgIC8vIFN5c3RlbSBpbnN0cnVjdGlvbnMgc2hvdWxkbid0IGJlIGluIGhpc3RvcnkgYW55d2F5LlxuICAgIHN5c3RlbTogW1widGV4dFwiXSxcbn07XG5mdW5jdGlvbiB2YWxpZGF0ZUNoYXRIaXN0b3J5KGhpc3RvcnkpIHtcbiAgICBsZXQgcHJldkNvbnRlbnQgPSBmYWxzZTtcbiAgICBmb3IgKGNvbnN0IGN1cnJDb250ZW50IG9mIGhpc3RvcnkpIHtcbiAgICAgICAgY29uc3QgeyByb2xlLCBwYXJ0cyB9ID0gY3VyckNvbnRlbnQ7XG4gICAgICAgIGlmICghcHJldkNvbnRlbnQgJiYgcm9sZSAhPT0gXCJ1c2VyXCIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvcihgRmlyc3QgY29udGVudCBzaG91bGQgYmUgd2l0aCByb2xlICd1c2VyJywgZ290ICR7cm9sZX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVBPU1NJQkxFX1JPTEVTLmluY2x1ZGVzKHJvbGUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3IoYEVhY2ggaXRlbSBzaG91bGQgaW5jbHVkZSByb2xlIGZpZWxkLiBHb3QgJHtyb2xlfSBidXQgdmFsaWQgcm9sZXMgYXJlOiAke0pTT04uc3RyaW5naWZ5KFBPU1NJQkxFX1JPTEVTKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocGFydHMpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3IoXCJDb250ZW50IHNob3VsZCBoYXZlICdwYXJ0cycgcHJvcGVydHkgd2l0aCBhbiBhcnJheSBvZiBQYXJ0c1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGFydHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJRXJyb3IoXCJFYWNoIENvbnRlbnQgc2hvdWxkIGhhdmUgYXQgbGVhc3Qgb25lIHBhcnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY291bnRGaWVsZHMgPSB7XG4gICAgICAgICAgICB0ZXh0OiAwLFxuICAgICAgICAgICAgaW5saW5lRGF0YTogMCxcbiAgICAgICAgICAgIGZ1bmN0aW9uQ2FsbDogMCxcbiAgICAgICAgICAgIGZ1bmN0aW9uUmVzcG9uc2U6IDAsXG4gICAgICAgICAgICBmaWxlRGF0YTogMCxcbiAgICAgICAgICAgIGV4ZWN1dGFibGVDb2RlOiAwLFxuICAgICAgICAgICAgY29kZUV4ZWN1dGlvblJlc3VsdDogMCxcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChjb25zdCBwYXJ0IG9mIHBhcnRzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBWQUxJRF9QQVJUX0ZJRUxEUykge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgaW4gcGFydCkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudEZpZWxkc1trZXldICs9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbGlkUGFydHMgPSBWQUxJRF9QQVJUU19QRVJfUk9MRVtyb2xlXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgVkFMSURfUEFSVF9GSUVMRFMpIHtcbiAgICAgICAgICAgIGlmICghdmFsaWRQYXJ0cy5pbmNsdWRlcyhrZXkpICYmIGNvdW50RmllbGRzW2tleV0gPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yKGBDb250ZW50IHdpdGggcm9sZSAnJHtyb2xlfScgY2FuJ3QgY29udGFpbiAnJHtrZXl9JyBwYXJ0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcHJldkNvbnRlbnQgPSB0cnVlO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogRG8gbm90IGxvZyBhIG1lc3NhZ2UgZm9yIHRoaXMgZXJyb3IuXG4gKi9cbmNvbnN0IFNJTEVOVF9FUlJPUiA9IFwiU0lMRU5UX0VSUk9SXCI7XG4vKipcbiAqIENoYXRTZXNzaW9uIGNsYXNzIHRoYXQgZW5hYmxlcyBzZW5kaW5nIGNoYXQgbWVzc2FnZXMgYW5kIHN0b3Jlc1xuICogaGlzdG9yeSBvZiBzZW50IGFuZCByZWNlaXZlZCBtZXNzYWdlcyBzbyBmYXIuXG4gKlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBDaGF0U2Vzc2lvbiB7XG4gICAgY29uc3RydWN0b3IoYXBpS2V5LCBtb2RlbCwgcGFyYW1zLCBfcmVxdWVzdE9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgICAgICB0aGlzLl9yZXF1ZXN0T3B0aW9ucyA9IF9yZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgdGhpcy5faGlzdG9yeSA9IFtdO1xuICAgICAgICB0aGlzLl9zZW5kUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICB0aGlzLl9hcGlLZXkgPSBhcGlLZXk7XG4gICAgICAgIGlmIChwYXJhbXMgPT09IG51bGwgfHwgcGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwYXJhbXMuaGlzdG9yeSkge1xuICAgICAgICAgICAgdmFsaWRhdGVDaGF0SGlzdG9yeShwYXJhbXMuaGlzdG9yeSk7XG4gICAgICAgICAgICB0aGlzLl9oaXN0b3J5ID0gcGFyYW1zLmhpc3Rvcnk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY2hhdCBoaXN0b3J5IHNvIGZhci4gQmxvY2tlZCBwcm9tcHRzIGFyZSBub3QgYWRkZWQgdG8gaGlzdG9yeS5cbiAgICAgKiBCbG9ja2VkIGNhbmRpZGF0ZXMgYXJlIG5vdCBhZGRlZCB0byBoaXN0b3J5LCBub3IgYXJlIHRoZSBwcm9tcHRzIHRoYXRcbiAgICAgKiBnZW5lcmF0ZWQgdGhlbS5cbiAgICAgKi9cbiAgICBhc3luYyBnZXRIaXN0b3J5KCkge1xuICAgICAgICBhd2FpdCB0aGlzLl9zZW5kUHJvbWlzZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hpc3Rvcnk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgY2hhdCBtZXNzYWdlIGFuZCByZWNlaXZlcyBhIG5vbi1zdHJlYW1pbmdcbiAgICAgKiB7QGxpbmsgR2VuZXJhdGVDb250ZW50UmVzdWx0fS5cbiAgICAgKlxuICAgICAqIEZpZWxkcyBzZXQgaW4gdGhlIG9wdGlvbmFsIHtAbGluayBTaW5nbGVSZXF1ZXN0T3B0aW9uc30gcGFyYW1ldGVyIHdpbGxcbiAgICAgKiB0YWtlIHByZWNlZGVuY2Ugb3ZlciB0aGUge0BsaW5rIFJlcXVlc3RPcHRpb25zfSB2YWx1ZXMgcHJvdmlkZWQgdG9cbiAgICAgKiB7QGxpbmsgR29vZ2xlR2VuZXJhdGl2ZUFJLmdldEdlbmVyYXRpdmVNb2RlbCB9LlxuICAgICAqL1xuICAgIGFzeW5jIHNlbmRNZXNzYWdlKHJlcXVlc3QsIHJlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRQcm9taXNlO1xuICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gZm9ybWF0TmV3Q29udGVudChyZXF1ZXN0KTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVDb250ZW50UmVxdWVzdCA9IHtcbiAgICAgICAgICAgIHNhZmV0eVNldHRpbmdzOiAoX2EgPSB0aGlzLnBhcmFtcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNhZmV0eVNldHRpbmdzLFxuICAgICAgICAgICAgZ2VuZXJhdGlvbkNvbmZpZzogKF9iID0gdGhpcy5wYXJhbXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZW5lcmF0aW9uQ29uZmlnLFxuICAgICAgICAgICAgdG9vbHM6IChfYyA9IHRoaXMucGFyYW1zKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9vbHMsXG4gICAgICAgICAgICB0b29sQ29uZmlnOiAoX2QgPSB0aGlzLnBhcmFtcykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnRvb2xDb25maWcsXG4gICAgICAgICAgICBzeXN0ZW1JbnN0cnVjdGlvbjogKF9lID0gdGhpcy5wYXJhbXMpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5zeXN0ZW1JbnN0cnVjdGlvbixcbiAgICAgICAgICAgIGNhY2hlZENvbnRlbnQ6IChfZiA9IHRoaXMucGFyYW1zKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuY2FjaGVkQ29udGVudCxcbiAgICAgICAgICAgIGNvbnRlbnRzOiBbLi4udGhpcy5faGlzdG9yeSwgbmV3Q29udGVudF0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNoYXRTZXNzaW9uUmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3JlcXVlc3RPcHRpb25zKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICBsZXQgZmluYWxSZXN1bHQ7XG4gICAgICAgIC8vIEFkZCBvbnRvIHRoZSBjaGFpbi5cbiAgICAgICAgdGhpcy5fc2VuZFByb21pc2UgPSB0aGlzLl9zZW5kUHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gZ2VuZXJhdGVDb250ZW50KHRoaXMuX2FwaUtleSwgdGhpcy5tb2RlbCwgZ2VuZXJhdGVDb250ZW50UmVxdWVzdCwgY2hhdFNlc3Npb25SZXF1ZXN0T3B0aW9ucykpXG4gICAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAocmVzdWx0LnJlc3BvbnNlLmNhbmRpZGF0ZXMgJiZcbiAgICAgICAgICAgICAgICByZXN1bHQucmVzcG9uc2UuY2FuZGlkYXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGlzdG9yeS5wdXNoKG5ld0NvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQ29udGVudCA9IE9iamVjdC5hc3NpZ24oeyBwYXJ0czogW10sIFxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNwb25zZSBzZWVtcyB0byBjb21lIGJhY2sgd2l0aG91dCBhIHJvbGUgc2V0LlxuICAgICAgICAgICAgICAgICAgICByb2xlOiBcIm1vZGVsXCIgfSwgKF9hID0gcmVzdWx0LnJlc3BvbnNlLmNhbmRpZGF0ZXMpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVswXS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9oaXN0b3J5LnB1c2gocmVzcG9uc2VDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrRXJyb3JNZXNzYWdlID0gZm9ybWF0QmxvY2tFcnJvck1lc3NhZ2UocmVzdWx0LnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBpZiAoYmxvY2tFcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBzZW5kTWVzc2FnZSgpIHdhcyB1bnN1Y2Nlc3NmdWwuICR7YmxvY2tFcnJvck1lc3NhZ2V9LiBJbnNwZWN0IHJlc3BvbnNlIG9iamVjdCBmb3IgZGV0YWlscy5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRQcm9taXNlO1xuICAgICAgICByZXR1cm4gZmluYWxSZXN1bHQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFNlbmRzIGEgY2hhdCBtZXNzYWdlIGFuZCByZWNlaXZlcyB0aGUgcmVzcG9uc2UgYXMgYVxuICAgICAqIHtAbGluayBHZW5lcmF0ZUNvbnRlbnRTdHJlYW1SZXN1bHR9IGNvbnRhaW5pbmcgYW4gaXRlcmFibGUgc3RyZWFtXG4gICAgICogYW5kIGEgcmVzcG9uc2UgcHJvbWlzZS5cbiAgICAgKlxuICAgICAqIEZpZWxkcyBzZXQgaW4gdGhlIG9wdGlvbmFsIHtAbGluayBTaW5nbGVSZXF1ZXN0T3B0aW9uc30gcGFyYW1ldGVyIHdpbGxcbiAgICAgKiB0YWtlIHByZWNlZGVuY2Ugb3ZlciB0aGUge0BsaW5rIFJlcXVlc3RPcHRpb25zfSB2YWx1ZXMgcHJvdmlkZWQgdG9cbiAgICAgKiB7QGxpbmsgR29vZ2xlR2VuZXJhdGl2ZUFJLmdldEdlbmVyYXRpdmVNb2RlbCB9LlxuICAgICAqL1xuICAgIGFzeW5jIHNlbmRNZXNzYWdlU3RyZWFtKHJlcXVlc3QsIHJlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2Y7XG4gICAgICAgIGF3YWl0IHRoaXMuX3NlbmRQcm9taXNlO1xuICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gZm9ybWF0TmV3Q29udGVudChyZXF1ZXN0KTtcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVDb250ZW50UmVxdWVzdCA9IHtcbiAgICAgICAgICAgIHNhZmV0eVNldHRpbmdzOiAoX2EgPSB0aGlzLnBhcmFtcykgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnNhZmV0eVNldHRpbmdzLFxuICAgICAgICAgICAgZ2VuZXJhdGlvbkNvbmZpZzogKF9iID0gdGhpcy5wYXJhbXMpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5nZW5lcmF0aW9uQ29uZmlnLFxuICAgICAgICAgICAgdG9vbHM6IChfYyA9IHRoaXMucGFyYW1zKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9vbHMsXG4gICAgICAgICAgICB0b29sQ29uZmlnOiAoX2QgPSB0aGlzLnBhcmFtcykgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnRvb2xDb25maWcsXG4gICAgICAgICAgICBzeXN0ZW1JbnN0cnVjdGlvbjogKF9lID0gdGhpcy5wYXJhbXMpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5zeXN0ZW1JbnN0cnVjdGlvbixcbiAgICAgICAgICAgIGNhY2hlZENvbnRlbnQ6IChfZiA9IHRoaXMucGFyYW1zKSA9PT0gbnVsbCB8fCBfZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2YuY2FjaGVkQ29udGVudCxcbiAgICAgICAgICAgIGNvbnRlbnRzOiBbLi4udGhpcy5faGlzdG9yeSwgbmV3Q29udGVudF0sXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNoYXRTZXNzaW9uUmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3JlcXVlc3RPcHRpb25zKSwgcmVxdWVzdE9wdGlvbnMpO1xuICAgICAgICBjb25zdCBzdHJlYW1Qcm9taXNlID0gZ2VuZXJhdGVDb250ZW50U3RyZWFtKHRoaXMuX2FwaUtleSwgdGhpcy5tb2RlbCwgZ2VuZXJhdGVDb250ZW50UmVxdWVzdCwgY2hhdFNlc3Npb25SZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIC8vIEFkZCBvbnRvIHRoZSBjaGFpbi5cbiAgICAgICAgdGhpcy5fc2VuZFByb21pc2UgPSB0aGlzLl9zZW5kUHJvbWlzZVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gc3RyZWFtUHJvbWlzZSlcbiAgICAgICAgICAgIC8vIFRoaXMgbXVzdCBiZSBoYW5kbGVkIHRvIGF2b2lkIHVuaGFuZGxlZCByZWplY3Rpb24sIGJ1dCBqdW1wXG4gICAgICAgICAgICAvLyB0byB0aGUgZmluYWwgY2F0Y2ggYmxvY2sgd2l0aCBhIGxhYmVsIHRvIG5vdCBsb2cgdGhpcyBlcnJvci5cbiAgICAgICAgICAgIC5jYXRjaCgoX2lnbm9yZWQpID0+IHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihTSUxFTlRfRVJST1IpO1xuICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKHN0cmVhbVJlc3VsdCkgPT4gc3RyZWFtUmVzdWx0LnJlc3BvbnNlKVxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuY2FuZGlkYXRlcyAmJiByZXNwb25zZS5jYW5kaWRhdGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oaXN0b3J5LnB1c2gobmV3Q29udGVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VDb250ZW50ID0gT2JqZWN0LmFzc2lnbih7fSwgcmVzcG9uc2UuY2FuZGlkYXRlc1swXS5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAvLyBSZXNwb25zZSBzZWVtcyB0byBjb21lIGJhY2sgd2l0aG91dCBhIHJvbGUgc2V0LlxuICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2VDb250ZW50LnJvbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VDb250ZW50LnJvbGUgPSBcIm1vZGVsXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2hpc3RvcnkucHVzaChyZXNwb25zZUNvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2tFcnJvck1lc3NhZ2UgPSBmb3JtYXRCbG9ja0Vycm9yTWVzc2FnZShyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrRXJyb3JNZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihgc2VuZE1lc3NhZ2VTdHJlYW0oKSB3YXMgdW5zdWNjZXNzZnVsLiAke2Jsb2NrRXJyb3JNZXNzYWdlfS4gSW5zcGVjdCByZXNwb25zZSBvYmplY3QgZm9yIGRldGFpbHMuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAvLyBFcnJvcnMgaW4gc3RyZWFtUHJvbWlzZSBhcmUgYWxyZWFkeSBjYXRjaGFibGUgYnkgdGhlIHVzZXIgYXNcbiAgICAgICAgICAgIC8vIHN0cmVhbVByb21pc2UgaXMgcmV0dXJuZWQuXG4gICAgICAgICAgICAvLyBBdm9pZCBkdXBsaWNhdGluZyB0aGUgZXJyb3IgbWVzc2FnZSBpbiBsb2dzLlxuICAgICAgICAgICAgaWYgKGUubWVzc2FnZSAhPT0gU0lMRU5UX0VSUk9SKSB7XG4gICAgICAgICAgICAgICAgLy8gVXNlcnMgZG8gbm90IGhhdmUgYWNjZXNzIHRvIF9zZW5kUHJvbWlzZSB0byBjYXRjaCBlcnJvcnNcbiAgICAgICAgICAgICAgICAvLyBkb3duc3RyZWFtIGZyb20gc3RyZWFtUHJvbWlzZSwgc28gdGhleSBzaG91bGQgbm90IHRocm93LlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc3RyZWFtUHJvbWlzZTtcbiAgICB9XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5hc3luYyBmdW5jdGlvbiBjb3VudFRva2VucyhhcGlLZXksIG1vZGVsLCBwYXJhbXMsIHNpbmdsZVJlcXVlc3RPcHRpb25zKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBtYWtlTW9kZWxSZXF1ZXN0KG1vZGVsLCBUYXNrLkNPVU5UX1RPS0VOUywgYXBpS2V5LCBmYWxzZSwgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSwgc2luZ2xlUmVxdWVzdE9wdGlvbnMpO1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59XG5cbi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDI0IEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5hc3luYyBmdW5jdGlvbiBlbWJlZENvbnRlbnQoYXBpS2V5LCBtb2RlbCwgcGFyYW1zLCByZXF1ZXN0T3B0aW9ucykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbWFrZU1vZGVsUmVxdWVzdChtb2RlbCwgVGFzay5FTUJFRF9DT05URU5ULCBhcGlLZXksIGZhbHNlLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGJhdGNoRW1iZWRDb250ZW50cyhhcGlLZXksIG1vZGVsLCBwYXJhbXMsIHJlcXVlc3RPcHRpb25zKSB7XG4gICAgY29uc3QgcmVxdWVzdHNXaXRoTW9kZWwgPSBwYXJhbXMucmVxdWVzdHMubWFwKChyZXF1ZXN0KSA9PiB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHJlcXVlc3QpLCB7IG1vZGVsIH0pO1xuICAgIH0pO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgbWFrZU1vZGVsUmVxdWVzdChtb2RlbCwgVGFzay5CQVRDSF9FTUJFRF9DT05URU5UUywgYXBpS2V5LCBmYWxzZSwgSlNPTi5zdHJpbmdpZnkoeyByZXF1ZXN0czogcmVxdWVzdHNXaXRoTW9kZWwgfSksIHJlcXVlc3RPcHRpb25zKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufVxuXG4vKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgMjAyNCBHb29nbGUgTExDXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuLyoqXG4gKiBDbGFzcyBmb3IgZ2VuZXJhdGl2ZSBtb2RlbCBBUElzLlxuICogQHB1YmxpY1xuICovXG5jbGFzcyBHZW5lcmF0aXZlTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKGFwaUtleSwgbW9kZWxQYXJhbXMsIF9yZXF1ZXN0T3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuYXBpS2V5ID0gYXBpS2V5O1xuICAgICAgICB0aGlzLl9yZXF1ZXN0T3B0aW9ucyA9IF9yZXF1ZXN0T3B0aW9ucztcbiAgICAgICAgaWYgKG1vZGVsUGFyYW1zLm1vZGVsLmluY2x1ZGVzKFwiL1wiKSkge1xuICAgICAgICAgICAgLy8gTW9kZWxzIG1heSBiZSBuYW1lZCBcIm1vZGVscy9tb2RlbC1uYW1lXCIgb3IgXCJ0dW5lZE1vZGVscy9tb2RlbC1uYW1lXCJcbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbFBhcmFtcy5tb2RlbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIHBhdGggaXMgbm90IGluY2x1ZGVkLCBhc3N1bWUgaXQncyBhIG5vbi10dW5lZCBtb2RlbC5cbiAgICAgICAgICAgIHRoaXMubW9kZWwgPSBgbW9kZWxzLyR7bW9kZWxQYXJhbXMubW9kZWx9YDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdlbmVyYXRpb25Db25maWcgPSBtb2RlbFBhcmFtcy5nZW5lcmF0aW9uQ29uZmlnIHx8IHt9O1xuICAgICAgICB0aGlzLnNhZmV0eVNldHRpbmdzID0gbW9kZWxQYXJhbXMuc2FmZXR5U2V0dGluZ3MgfHwgW107XG4gICAgICAgIHRoaXMudG9vbHMgPSBtb2RlbFBhcmFtcy50b29scztcbiAgICAgICAgdGhpcy50b29sQ29uZmlnID0gbW9kZWxQYXJhbXMudG9vbENvbmZpZztcbiAgICAgICAgdGhpcy5zeXN0ZW1JbnN0cnVjdGlvbiA9IGZvcm1hdFN5c3RlbUluc3RydWN0aW9uKG1vZGVsUGFyYW1zLnN5c3RlbUluc3RydWN0aW9uKTtcbiAgICAgICAgdGhpcy5jYWNoZWRDb250ZW50ID0gbW9kZWxQYXJhbXMuY2FjaGVkQ29udGVudDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogTWFrZXMgYSBzaW5nbGUgbm9uLXN0cmVhbWluZyBjYWxsIHRvIHRoZSBtb2RlbFxuICAgICAqIGFuZCByZXR1cm5zIGFuIG9iamVjdCBjb250YWluaW5nIGEgc2luZ2xlIHtAbGluayBHZW5lcmF0ZUNvbnRlbnRSZXNwb25zZX0uXG4gICAgICpcbiAgICAgKiBGaWVsZHMgc2V0IGluIHRoZSBvcHRpb25hbCB7QGxpbmsgU2luZ2xlUmVxdWVzdE9wdGlvbnN9IHBhcmFtZXRlciB3aWxsXG4gICAgICogdGFrZSBwcmVjZWRlbmNlIG92ZXIgdGhlIHtAbGluayBSZXF1ZXN0T3B0aW9uc30gdmFsdWVzIHByb3ZpZGVkIHRvXG4gICAgICoge0BsaW5rIEdvb2dsZUdlbmVyYXRpdmVBSS5nZXRHZW5lcmF0aXZlTW9kZWwgfS5cbiAgICAgKi9cbiAgICBhc3luYyBnZW5lcmF0ZUNvbnRlbnQocmVxdWVzdCwgcmVxdWVzdE9wdGlvbnMgPSB7fSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFBhcmFtcyA9IGZvcm1hdEdlbmVyYXRlQ29udGVudElucHV0KHJlcXVlc3QpO1xuICAgICAgICBjb25zdCBnZW5lcmF0aXZlTW9kZWxSZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fcmVxdWVzdE9wdGlvbnMpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZUNvbnRlbnQodGhpcy5hcGlLZXksIHRoaXMubW9kZWwsIE9iamVjdC5hc3NpZ24oeyBnZW5lcmF0aW9uQ29uZmlnOiB0aGlzLmdlbmVyYXRpb25Db25maWcsIHNhZmV0eVNldHRpbmdzOiB0aGlzLnNhZmV0eVNldHRpbmdzLCB0b29sczogdGhpcy50b29scywgdG9vbENvbmZpZzogdGhpcy50b29sQ29uZmlnLCBzeXN0ZW1JbnN0cnVjdGlvbjogdGhpcy5zeXN0ZW1JbnN0cnVjdGlvbiwgY2FjaGVkQ29udGVudDogKF9hID0gdGhpcy5jYWNoZWRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSB9LCBmb3JtYXR0ZWRQYXJhbXMpLCBnZW5lcmF0aXZlTW9kZWxSZXF1ZXN0T3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIE1ha2VzIGEgc2luZ2xlIHN0cmVhbWluZyBjYWxsIHRvIHRoZSBtb2RlbCBhbmQgcmV0dXJucyBhbiBvYmplY3RcbiAgICAgKiBjb250YWluaW5nIGFuIGl0ZXJhYmxlIHN0cmVhbSB0aGF0IGl0ZXJhdGVzIG92ZXIgYWxsIGNodW5rcyBpbiB0aGVcbiAgICAgKiBzdHJlYW1pbmcgcmVzcG9uc2UgYXMgd2VsbCBhcyBhIHByb21pc2UgdGhhdCByZXR1cm5zIHRoZSBmaW5hbFxuICAgICAqIGFnZ3JlZ2F0ZWQgcmVzcG9uc2UuXG4gICAgICpcbiAgICAgKiBGaWVsZHMgc2V0IGluIHRoZSBvcHRpb25hbCB7QGxpbmsgU2luZ2xlUmVxdWVzdE9wdGlvbnN9IHBhcmFtZXRlciB3aWxsXG4gICAgICogdGFrZSBwcmVjZWRlbmNlIG92ZXIgdGhlIHtAbGluayBSZXF1ZXN0T3B0aW9uc30gdmFsdWVzIHByb3ZpZGVkIHRvXG4gICAgICoge0BsaW5rIEdvb2dsZUdlbmVyYXRpdmVBSS5nZXRHZW5lcmF0aXZlTW9kZWwgfS5cbiAgICAgKi9cbiAgICBhc3luYyBnZW5lcmF0ZUNvbnRlbnRTdHJlYW0ocmVxdWVzdCwgcmVxdWVzdE9wdGlvbnMgPSB7fSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFBhcmFtcyA9IGZvcm1hdEdlbmVyYXRlQ29udGVudElucHV0KHJlcXVlc3QpO1xuICAgICAgICBjb25zdCBnZW5lcmF0aXZlTW9kZWxSZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fcmVxdWVzdE9wdGlvbnMpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZUNvbnRlbnRTdHJlYW0odGhpcy5hcGlLZXksIHRoaXMubW9kZWwsIE9iamVjdC5hc3NpZ24oeyBnZW5lcmF0aW9uQ29uZmlnOiB0aGlzLmdlbmVyYXRpb25Db25maWcsIHNhZmV0eVNldHRpbmdzOiB0aGlzLnNhZmV0eVNldHRpbmdzLCB0b29sczogdGhpcy50b29scywgdG9vbENvbmZpZzogdGhpcy50b29sQ29uZmlnLCBzeXN0ZW1JbnN0cnVjdGlvbjogdGhpcy5zeXN0ZW1JbnN0cnVjdGlvbiwgY2FjaGVkQ29udGVudDogKF9hID0gdGhpcy5jYWNoZWRDb250ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSB9LCBmb3JtYXR0ZWRQYXJhbXMpLCBnZW5lcmF0aXZlTW9kZWxSZXF1ZXN0T3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgYSBuZXcge0BsaW5rIENoYXRTZXNzaW9ufSBpbnN0YW5jZSB3aGljaCBjYW4gYmUgdXNlZCBmb3JcbiAgICAgKiBtdWx0aS10dXJuIGNoYXRzLlxuICAgICAqL1xuICAgIHN0YXJ0Q2hhdChzdGFydENoYXRQYXJhbXMpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICByZXR1cm4gbmV3IENoYXRTZXNzaW9uKHRoaXMuYXBpS2V5LCB0aGlzLm1vZGVsLCBPYmplY3QuYXNzaWduKHsgZ2VuZXJhdGlvbkNvbmZpZzogdGhpcy5nZW5lcmF0aW9uQ29uZmlnLCBzYWZldHlTZXR0aW5nczogdGhpcy5zYWZldHlTZXR0aW5ncywgdG9vbHM6IHRoaXMudG9vbHMsIHRvb2xDb25maWc6IHRoaXMudG9vbENvbmZpZywgc3lzdGVtSW5zdHJ1Y3Rpb246IHRoaXMuc3lzdGVtSW5zdHJ1Y3Rpb24sIGNhY2hlZENvbnRlbnQ6IChfYSA9IHRoaXMuY2FjaGVkQ29udGVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUgfSwgc3RhcnRDaGF0UGFyYW1zKSwgdGhpcy5fcmVxdWVzdE9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb3VudHMgdGhlIHRva2VucyBpbiB0aGUgcHJvdmlkZWQgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEZpZWxkcyBzZXQgaW4gdGhlIG9wdGlvbmFsIHtAbGluayBTaW5nbGVSZXF1ZXN0T3B0aW9uc30gcGFyYW1ldGVyIHdpbGxcbiAgICAgKiB0YWtlIHByZWNlZGVuY2Ugb3ZlciB0aGUge0BsaW5rIFJlcXVlc3RPcHRpb25zfSB2YWx1ZXMgcHJvdmlkZWQgdG9cbiAgICAgKiB7QGxpbmsgR29vZ2xlR2VuZXJhdGl2ZUFJLmdldEdlbmVyYXRpdmVNb2RlbCB9LlxuICAgICAqL1xuICAgIGFzeW5jIGNvdW50VG9rZW5zKHJlcXVlc3QsIHJlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkUGFyYW1zID0gZm9ybWF0Q291bnRUb2tlbnNJbnB1dChyZXF1ZXN0LCB7XG4gICAgICAgICAgICBtb2RlbDogdGhpcy5tb2RlbCxcbiAgICAgICAgICAgIGdlbmVyYXRpb25Db25maWc6IHRoaXMuZ2VuZXJhdGlvbkNvbmZpZyxcbiAgICAgICAgICAgIHNhZmV0eVNldHRpbmdzOiB0aGlzLnNhZmV0eVNldHRpbmdzLFxuICAgICAgICAgICAgdG9vbHM6IHRoaXMudG9vbHMsXG4gICAgICAgICAgICB0b29sQ29uZmlnOiB0aGlzLnRvb2xDb25maWcsXG4gICAgICAgICAgICBzeXN0ZW1JbnN0cnVjdGlvbjogdGhpcy5zeXN0ZW1JbnN0cnVjdGlvbixcbiAgICAgICAgICAgIGNhY2hlZENvbnRlbnQ6IHRoaXMuY2FjaGVkQ29udGVudCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRpdmVNb2RlbFJlcXVlc3RPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9yZXF1ZXN0T3B0aW9ucyksIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIGNvdW50VG9rZW5zKHRoaXMuYXBpS2V5LCB0aGlzLm1vZGVsLCBmb3JtYXR0ZWRQYXJhbXMsIGdlbmVyYXRpdmVNb2RlbFJlcXVlc3RPcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1iZWRzIHRoZSBwcm92aWRlZCBjb250ZW50LlxuICAgICAqXG4gICAgICogRmllbGRzIHNldCBpbiB0aGUgb3B0aW9uYWwge0BsaW5rIFNpbmdsZVJlcXVlc3RPcHRpb25zfSBwYXJhbWV0ZXIgd2lsbFxuICAgICAqIHRha2UgcHJlY2VkZW5jZSBvdmVyIHRoZSB7QGxpbmsgUmVxdWVzdE9wdGlvbnN9IHZhbHVlcyBwcm92aWRlZCB0b1xuICAgICAqIHtAbGluayBHb29nbGVHZW5lcmF0aXZlQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsIH0uXG4gICAgICovXG4gICAgYXN5bmMgZW1iZWRDb250ZW50KHJlcXVlc3QsIHJlcXVlc3RPcHRpb25zID0ge30pIHtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVkUGFyYW1zID0gZm9ybWF0RW1iZWRDb250ZW50SW5wdXQocmVxdWVzdCk7XG4gICAgICAgIGNvbnN0IGdlbmVyYXRpdmVNb2RlbFJlcXVlc3RPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCB0aGlzLl9yZXF1ZXN0T3B0aW9ucyksIHJlcXVlc3RPcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIGVtYmVkQ29udGVudCh0aGlzLmFwaUtleSwgdGhpcy5tb2RlbCwgZm9ybWF0dGVkUGFyYW1zLCBnZW5lcmF0aXZlTW9kZWxSZXF1ZXN0T3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtYmVkcyBhbiBhcnJheSBvZiB7QGxpbmsgRW1iZWRDb250ZW50UmVxdWVzdH1zLlxuICAgICAqXG4gICAgICogRmllbGRzIHNldCBpbiB0aGUgb3B0aW9uYWwge0BsaW5rIFNpbmdsZVJlcXVlc3RPcHRpb25zfSBwYXJhbWV0ZXIgd2lsbFxuICAgICAqIHRha2UgcHJlY2VkZW5jZSBvdmVyIHRoZSB7QGxpbmsgUmVxdWVzdE9wdGlvbnN9IHZhbHVlcyBwcm92aWRlZCB0b1xuICAgICAqIHtAbGluayBHb29nbGVHZW5lcmF0aXZlQUkuZ2V0R2VuZXJhdGl2ZU1vZGVsIH0uXG4gICAgICovXG4gICAgYXN5bmMgYmF0Y2hFbWJlZENvbnRlbnRzKGJhdGNoRW1iZWRDb250ZW50UmVxdWVzdCwgcmVxdWVzdE9wdGlvbnMgPSB7fSkge1xuICAgICAgICBjb25zdCBnZW5lcmF0aXZlTW9kZWxSZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fcmVxdWVzdE9wdGlvbnMpLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBiYXRjaEVtYmVkQ29udGVudHModGhpcy5hcGlLZXksIHRoaXMubW9kZWwsIGJhdGNoRW1iZWRDb250ZW50UmVxdWVzdCwgZ2VuZXJhdGl2ZU1vZGVsUmVxdWVzdE9wdGlvbnMpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IDIwMjQgR29vZ2xlIExMQ1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbi8qKlxuICogVG9wLWxldmVsIGNsYXNzIGZvciB0aGlzIFNES1xuICogQHB1YmxpY1xuICovXG5jbGFzcyBHb29nbGVHZW5lcmF0aXZlQUkge1xuICAgIGNvbnN0cnVjdG9yKGFwaUtleSkge1xuICAgICAgICB0aGlzLmFwaUtleSA9IGFwaUtleTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogR2V0cyBhIHtAbGluayBHZW5lcmF0aXZlTW9kZWx9IGluc3RhbmNlIGZvciB0aGUgcHJvdmlkZWQgbW9kZWwgbmFtZS5cbiAgICAgKi9cbiAgICBnZXRHZW5lcmF0aXZlTW9kZWwobW9kZWxQYXJhbXMsIHJlcXVlc3RPcHRpb25zKSB7XG4gICAgICAgIGlmICghbW9kZWxQYXJhbXMubW9kZWwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlFcnJvcihgTXVzdCBwcm92aWRlIGEgbW9kZWwgbmFtZS4gYCArXG4gICAgICAgICAgICAgICAgYEV4YW1wbGU6IGdlbmFpLmdldEdlbmVyYXRpdmVNb2RlbCh7IG1vZGVsOiAnbXktbW9kZWwtbmFtZScgfSlgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEdlbmVyYXRpdmVNb2RlbCh0aGlzLmFwaUtleSwgbW9kZWxQYXJhbXMsIHJlcXVlc3RPcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHtAbGluayBHZW5lcmF0aXZlTW9kZWx9IGluc3RhbmNlIGZyb20gcHJvdmlkZWQgY29udGVudCBjYWNoZS5cbiAgICAgKi9cbiAgICBnZXRHZW5lcmF0aXZlTW9kZWxGcm9tQ2FjaGVkQ29udGVudChjYWNoZWRDb250ZW50LCBtb2RlbFBhcmFtcywgcmVxdWVzdE9wdGlvbnMpIHtcbiAgICAgICAgaWYgKCFjYWNoZWRDb250ZW50Lm5hbWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlSZXF1ZXN0SW5wdXRFcnJvcihcIkNhY2hlZCBjb250ZW50IG11c3QgY29udGFpbiBhIGBuYW1lYCBmaWVsZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFjYWNoZWRDb250ZW50Lm1vZGVsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgR29vZ2xlR2VuZXJhdGl2ZUFJUmVxdWVzdElucHV0RXJyb3IoXCJDYWNoZWQgY29udGVudCBtdXN0IGNvbnRhaW4gYSBgbW9kZWxgIGZpZWxkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogTm90IGNoZWNraW5nIHRvb2xzIGFuZCB0b29sQ29uZmlnIGZvciBub3cgYXMgaXQgd291bGQgcmVxdWlyZSBhIGRlZXBcbiAgICAgICAgICogZXF1YWxpdHkgY29tcGFyaXNvbiBhbmQgaXNuJ3QgbGlrZWx5IHRvIGJlIGEgY29tbW9uIGNhc2UuXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdCBkaXNhbGxvd2VkRHVwbGljYXRlcyA9IFtcIm1vZGVsXCIsIFwic3lzdGVtSW5zdHJ1Y3Rpb25cIl07XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGRpc2FsbG93ZWREdXBsaWNhdGVzKSB7XG4gICAgICAgICAgICBpZiAoKG1vZGVsUGFyYW1zID09PSBudWxsIHx8IG1vZGVsUGFyYW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBtb2RlbFBhcmFtc1trZXldKSAmJlxuICAgICAgICAgICAgICAgIGNhY2hlZENvbnRlbnRba2V5XSAmJlxuICAgICAgICAgICAgICAgIChtb2RlbFBhcmFtcyA9PT0gbnVsbCB8fCBtb2RlbFBhcmFtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogbW9kZWxQYXJhbXNba2V5XSkgIT09IGNhY2hlZENvbnRlbnRba2V5XSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwibW9kZWxcIikge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtb2RlbFBhcmFtc0NvbXAgPSBtb2RlbFBhcmFtcy5tb2RlbC5zdGFydHNXaXRoKFwibW9kZWxzL1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBtb2RlbFBhcmFtcy5tb2RlbC5yZXBsYWNlKFwibW9kZWxzL1wiLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBtb2RlbFBhcmFtcy5tb2RlbDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FjaGVkQ29udGVudENvbXAgPSBjYWNoZWRDb250ZW50Lm1vZGVsLnN0YXJ0c1dpdGgoXCJtb2RlbHMvXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGNhY2hlZENvbnRlbnQubW9kZWwucmVwbGFjZShcIm1vZGVscy9cIiwgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY2FjaGVkQ29udGVudC5tb2RlbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGVsUGFyYW1zQ29tcCA9PT0gY2FjaGVkQ29udGVudENvbXApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBHb29nbGVHZW5lcmF0aXZlQUlSZXF1ZXN0SW5wdXRFcnJvcihgRGlmZmVyZW50IHZhbHVlIGZvciBcIiR7a2V5fVwiIHNwZWNpZmllZCBpbiBtb2RlbFBhcmFtc2AgK1xuICAgICAgICAgICAgICAgICAgICBgICgke21vZGVsUGFyYW1zW2tleV19KSBhbmQgY2FjaGVkQ29udGVudCAoJHtjYWNoZWRDb250ZW50W2tleV19KWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG1vZGVsUGFyYW1zRnJvbUNhY2hlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBtb2RlbFBhcmFtcyksIHsgbW9kZWw6IGNhY2hlZENvbnRlbnQubW9kZWwsIHRvb2xzOiBjYWNoZWRDb250ZW50LnRvb2xzLCB0b29sQ29uZmlnOiBjYWNoZWRDb250ZW50LnRvb2xDb25maWcsIHN5c3RlbUluc3RydWN0aW9uOiBjYWNoZWRDb250ZW50LnN5c3RlbUluc3RydWN0aW9uLCBjYWNoZWRDb250ZW50IH0pO1xuICAgICAgICByZXR1cm4gbmV3IEdlbmVyYXRpdmVNb2RlbCh0aGlzLmFwaUtleSwgbW9kZWxQYXJhbXNGcm9tQ2FjaGUsIHJlcXVlc3RPcHRpb25zKTtcbiAgICB9XG59XG5cbmV4cG9ydCB7IEJsb2NrUmVhc29uLCBDaGF0U2Vzc2lvbiwgRHluYW1pY1JldHJpZXZhbE1vZGUsIEV4ZWN1dGFibGVDb2RlTGFuZ3VhZ2UsIEZpbmlzaFJlYXNvbiwgRnVuY3Rpb25DYWxsaW5nTW9kZSwgR2VuZXJhdGl2ZU1vZGVsLCBHb29nbGVHZW5lcmF0aXZlQUksIEdvb2dsZUdlbmVyYXRpdmVBSUVycm9yLCBHb29nbGVHZW5lcmF0aXZlQUlGZXRjaEVycm9yLCBHb29nbGVHZW5lcmF0aXZlQUlSZXF1ZXN0SW5wdXRFcnJvciwgR29vZ2xlR2VuZXJhdGl2ZUFJUmVzcG9uc2VFcnJvciwgSGFybUJsb2NrVGhyZXNob2xkLCBIYXJtQ2F0ZWdvcnksIEhhcm1Qcm9iYWJpbGl0eSwgT3V0Y29tZSwgUE9TU0lCTEVfUk9MRVMsIFNjaGVtYVR5cGUsIFRhc2tUeXBlIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEdvb2dsZUdlbmVyYXRpdmVBSSB9IGZyb20gXCJAZ29vZ2xlL2dlbmVyYXRpdmUtYWlcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICBpZiAodHlwZW9mIGNocm9tZSA9PT0gJ3VuZGVmaW5lZCcgfHwgIWNocm9tZS5ydW50aW1lKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignQ2hyb21lIGV4dGVuc2lvbiBBUElzIGFyZSBub3QgYXZhaWxhYmxlJyk7XHJcbiAgICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kKG1lc3NhZ2UpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNocm9tZS5ydW50aW1lLnNlbmRNZXNzYWdlKG1lc3NhZ2UsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIHNlbmRpbmcgbWVzc2FnZTonLCBjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybignRXJyb3IgaW4gc2VuZE1lc3NhZ2U6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgZnVuY3Rpb24gc2FmZWx5U3RvcmVQcm9ncmVzcyhwcm9ncmVzcywgdGl0bGUpIHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgXHJcbiAgICAgICAgICAgICAgdmlkZW9Qcm9ncmVzczogcHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlXHJcbiAgICAgICAgICB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGNocm9tZS5ydW50aW1lLmxhc3RFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIHN0b3JpbmcgcHJvZ3Jlc3M6JywgY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUHJvZ3Jlc3Mgc3RvcmVkOicsIHByb2dyZXNzKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvciBpbiBzdG9yYWdlOicsIGVycm9yKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiBcclxuICBmdW5jdGlvbiBpbml0aWFsaXplVmlkZW9UcmFja2luZygpIHtcclxuICAgICAgY29uc3QgdmlkZW9FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndmlkZW8nKTtcclxuICAgICAgaWYgKCF2aWRlb0VsZW1lbnQpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIHZpZGVvIGVsZW1lbnQgZm91bmQuXCIpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2aWRlb0VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndGltZXVwZGF0ZScsICgpID0+IHtcclxuICAgICAgICBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChbJ3ZpZGVvQ29tcGxldGVkJ10sIChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdC52aWRlb0NvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gKHZpZGVvRWxlbWVudC5jdXJyZW50VGltZSAvIHZpZGVvRWxlbWVudC5kdXJhdGlvbikgKiAxMDA7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpZGVvVGl0bGUgPSBkb2N1bWVudC50aXRsZTtcclxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NGaXhlZCA9IHByb2dyZXNzLnRvRml4ZWQoMik7XHJcbiAgICAgICAgICAgIHNlbmRNZXNzYWdlVG9CYWNrZ3JvdW5kKHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwicHJvZ3Jlc3NfdXBkYXRlXCIsXHJcbiAgICAgICAgICAgICAgICB2aWRlb1Byb2dyZXNzOiBwcm9ncmVzc0ZpeGVkLFxyXG4gICAgICAgICAgICAgICAgdmlkZW9UaXRsZTogdmlkZW9UaXRsZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2FmZWx5U3RvcmVQcm9ncmVzcyhwcm9ncmVzc0ZpeGVkLCB2aWRlb1RpdGxlKTtcclxuICAgIFxyXG4gICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPT0gMTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNocm9tZS5zdG9yYWdlLnN5bmMuc2V0KHsgdmlkZW9Db21wbGV0ZWQ6IHRydWUgfSwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hyb21lLnJ1bnRpbWUubGFzdEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIHN0b3JpbmcgY29tcGxldGlvbjonLCBjaHJvbWUucnVudGltZS5sYXN0RXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignRXJyb3Igc3RvcmluZyBjb21wbGV0aW9uOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICB9XHJcbiAgc2V0VGltZW91dChpbml0aWFsaXplVmlkZW9UcmFja2luZywgMTAwMCk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdFF1ZXN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdFF1ZXN0aW9uJyk7XHJcbiAgc3VibWl0UXVlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc3QgUHJvbXB0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJRdWVzdGlvbicpLnZhbHVlO1xyXG4gICAgICBhc3luYyBmdW5jdGlvbiBleGVjdXRlUHJvbXB0KFByb21wdCkge1xyXG4gICAgICAgICAgY29uc3Qgc3VtbWFyaWVzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZGVvRCcpO1xyXG4gICAgICAgICAgc3VtbWFyaWVzQ29udGFpbmVyLmlubmVySFRNTCA9ICdQcm9jZXNzaW5nLi4uJztcclxuXHJcbiAgICAgICAgICAvLyBGdW5jdGlvbiB0byBnZXQgQUkgcmVzcG9uc2VcclxuICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIGdldEdlbWluaVJlc3BvbnNlKGNvbnRlbnQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBhcGlLZXkgPSBgQUl6YVN5QjFySUNVU080R1lkcHpZLWRrWF9rY2RSdWJCcGxBcENJYDtcclxuICAgICAgICAgICAgICBjb25zdCBnZW5BSSA9IG5ldyBHb29nbGVHZW5lcmF0aXZlQUkoYXBpS2V5KTtcclxuICAgICAgICAgICAgICBjb25zdCBtb2RlbCA9IGdlbkFJLmdldEdlbmVyYXRpdmVNb2RlbCh7IG1vZGVsOiBcImdlbWluaS1wcm9cIiB9KTtcclxuICAgICAgICAgICAgICBjb25zdCBmdWxsQ29udGVudCA9IGNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbW9kZWwuZ2VuZXJhdGVDb250ZW50KGZ1bGxDb250ZW50KTtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXN1bHQucmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRSZXNwb25zZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcclxuICAgICAgICAgICAgICAgICAgc3VtbWFyaWVzQ29udGFpbmVyLmlubmVySFRNTCA9IHRleHRSZXNwb25zZTtcclxuICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBnZW5lcmF0aW5nIHByb2Nlc3Npbmc6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICBzdW1tYXJpZXNDb250YWluZXIuaW5uZXJIVE1MID0gJ0Vycm9yIHByb2Nlc3NpbmcgeW91ciByZXF1ZXN0Lic7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGF3YWl0IGdldEdlbWluaVJlc3BvbnNlKFByb21wdCk7XHJcbiAgICAgIH1cclxuICAgICAgZXhlY3V0ZVByb21wdChQcm9tcHQpO1xyXG4gIH0pO1xyXG59OyJdLCJuYW1lcyI6WyJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiR29vZ2xlR2VuZXJhdGl2ZUFJIiwid2luZG93Iiwib25sb2FkIiwiY2hyb21lIiwicnVudGltZSIsImNvbnNvbGUiLCJ3YXJuIiwic2VuZE1lc3NhZ2VUb0JhY2tncm91bmQiLCJtZXNzYWdlIiwic2VuZE1lc3NhZ2UiLCJyZXNwb25zZSIsImxhc3RFcnJvciIsImVycm9yIiwic2FmZWx5U3RvcmVQcm9ncmVzcyIsInByb2dyZXNzIiwidGl0bGUiLCJzdG9yYWdlIiwic3luYyIsInNldCIsInZpZGVvUHJvZ3Jlc3MiLCJsb2ciLCJpbml0aWFsaXplVmlkZW9UcmFja2luZyIsInZpZGVvRWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXQiLCJyZXN1bHQiLCJ2aWRlb0NvbXBsZXRlZCIsImN1cnJlbnRUaW1lIiwiZHVyYXRpb24iLCJ2aWRlb1RpdGxlIiwicHJvZ3Jlc3NGaXhlZCIsInRvRml4ZWQiLCJzZXRUaW1lb3V0Iiwic3VibWl0UXVlc3Rpb24iLCJnZXRFbGVtZW50QnlJZCIsIlByb21wdCIsImV4ZWN1dGVQcm9tcHQiLCJfeCIsIl9leGVjdXRlUHJvbXB0IiwiX2NhbGxlZTIiLCJzdW1tYXJpZXNDb250YWluZXIiLCJnZXRHZW1pbmlSZXNwb25zZSIsIl9nZXRHZW1pbmlSZXNwb25zZSIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl9nZXRHZW1pbmlSZXNwb25zZTMiLCJfY2FsbGVlIiwiY29udGVudCIsImFwaUtleSIsImdlbkFJIiwibW9kZWwiLCJmdWxsQ29udGVudCIsInRleHRSZXNwb25zZSIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJnZXRHZW5lcmF0aXZlTW9kZWwiLCJnZW5lcmF0ZUNvbnRlbnQiLCJ0ZXh0IiwiaW5uZXJIVE1MIiwidDAiLCJfZ2V0R2VtaW5pUmVzcG9uc2UyIiwiX3gyIl0sInNvdXJjZVJvb3QiOiIifQ==