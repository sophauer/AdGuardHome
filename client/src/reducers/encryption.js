import { handleActions } from 'redux-actions';

import * as actions from '../actions/encryption';

const encryption = handleActions({
    [actions.getTlsStatusRequest]: state => ({ ...state, processing: true }),
    [actions.getTlsStatusFailure]: state => ({ ...state, processing: false }),
    [actions.getTlsStatusSuccess]: (state, { payload }) => {
        const newState = {
            ...state,
            ...payload,
            processing: false,
        };
        return newState;
    },

    [actions.setTlsConfigRequest]: state => ({ ...state, processingConfig: true }),
    [actions.setTlsConfigFailure]: state => ({ ...state, processingConfig: false }),
    [actions.setTlsConfigSuccess]: (state, { payload }) => {
        const newState = {
            ...state,
            ...payload,
            processingConfig: false,
        };
        return newState;
    },

    [actions.validateTlsConfigRequest]: state => ({ ...state, processingValidate: true }),
    [actions.validateTlsConfigFailure]: state => ({ ...state, processingValidate: false }),
    [actions.validateTlsConfigSuccess]: (state, { payload }) => {
        const newState = {
            ...state,
            ...payload,
            processingValidate: false,
        };
        return newState;
    },
}, {
    processing: true,
    processingConfig: false,
    processingValidate: false,
    enabled: false,
    dns_names: null,
    force_https: false,
    issuer: '',
    key_type: '',
    not_after: '',
    not_before: '',
    port_dns_over_tls: '',
    port_https: '',
    subject: '',
    valid_chain: false,
    valid_key: false,
    valid_cert: false,
    status_cert: '',
    status_key: '',
    certificate_chain: '',
    private_key: '',
    server_name: '',
    warning_validation: '',
});

export default encryption;