export default function submitReducer(state, action) {
    switch (action.type) {
        case 'titleIsMissing': {
            return {
                ...state,
                error: true,
                errorText: 'You forgot to type your title :)',
                [action.field]: action.value,
            }
        }
        case 'titleIsInPlace': {
            return {
                ...state,
                error: false,
                errorText: '',
                [action.fieldName]: action.payload,
            }
        }
        case 'titleIsTooLong': {
            return {
                ...state,
                error: true,
                errorText: 'Title has to be no longer than 150 characters',
                [action.fieldName]: action.payload,
            }
        }
        case 'titleIsIncorrect': {
            return {
                ...state,
                error: true,
                errorText: 'Special characters are not allowed',
                [action.fieldName]: action.payload,
            }
        }
        case 'fileIsInPlace': {
            return {
                ...state,
                fileUploadError: false,
                fileUploadErrorText: '',
            }
        }
        case 'fileIsMissing': {
            return {
                ...state,
                fileUploadError: true,
                fileUploadErrorText: 'Image is missing',
            }
        }
        case 'imageIsUploading': {
            return {
                ...state,
                isUploading: true,
            }
        }
        case 'imageUploaded': {
            return {
                ...state,
                isUploading: false,
            }
        }
        default:
            break;
    }
    return state;
}