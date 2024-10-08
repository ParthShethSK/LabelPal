export default {
  WELCOME: "Welcome",
  WELCOME_MODAL_DESCRIPTION_PAR_1:
    "LabelPal is a free computer vision based training data generation tool.",
  WELCOME_MODAL_DESCRIPTION_PAR_2:
    "It supports a variety of popular data formats to help you build a model that suits your needs.",
  WELCOME_MODAL_DESCRIPTION_PAR_3:
    "Label all your images automatically by utilizing an embedded machine learning model.",
  WELCOME_MODAL_DESCRIPTION_PAR_4:
    "No data will ever leave the privacy of your computer as this tool is built to operate locally on your browser.",
  START: "Start",
  LABEL_NAME: "Label name:",
  SUBMIT: "Submit",
  CANCEL: "Cancel",
  MACHINE_LEARNING: "Machine Learning",
  LOADING: "Loading...",
  UPLOAD_DATASETS: "Upload Datasets",
  CHOOSE_FORMAT: "Choose Format",
  CHOOSE_FORMAT_COLON: "Choose Format:",
  CLASSES: "Classes (.txt)",
  ANNOTATIONS_JSON: "Annotations (.json)",
  LABELS: "Labels:",
  IMAGES: "Images:",
  EDIT_SHAPES: "Edit Shapes (E)",
  NEW_BOUNDING_BOX: "New Bounding box (W)",
  NEW_POLYGON: "New Polygon (Q)",
  ADD_NEW_POINTS_TO_POLYGON: "Add Points to Polygon (A)",
  REMOVE_POLYGON_POINTS: "Remove Polygon points (R)",
  EXPORT_DATASETS: "Export Datasets",
  ZOOM_IN: "Zoom In",
  ZOOM_OUT: "Zoom Out",
  SETTINGS: "Settings",
  REMOVE_LABEL: "Remove label",
  LABEL_VISIBILITY: "Label Visibility",
  MOVABLE_OBJECTS: "Movable Objects",
  CONTINUOUS_DRAWING: "Continuous Drawing",
  BOUNDING_BOX_CROSSHAIR: "Bounding box Crosshair",
  VISIBILITY: "Visibility",
  COLOR: "Color",
  EXPORT: "Export",
  YES: "Yes",
  NO: "No",
  BACK: "Back",
  NEXT: "Next",
  RETRY: "Retry",
  FINISH: "Finish",
  CLOSE: "Close",
  UPLOAD: "Upload",
  REMOVE_IMAGE: "Remove image",
  REMOVE_IMAGE_DESCRIPTION:
    "Are you sure you want to remove the selected image?",
  REMOVE_IMAGE_NOT_SHOW_AGAIN: "Do not show again",
  UPLOAD_IMAGES: "Upload images",
  IMAGE_NAME: "Image name",
  PREVIOUS_IMAGE: "Previous Image (",
  NEXT_IMAGE: "Next Image (",
  ALL_IMAGES: "All Images",
  NEW_IMAGES: "New Images",
  ML_MODAL_PLEASE_UPLOAD_IMAGE: "Please upload an image to get started.",
  UPLOAD_DATASETS_MODAL_DESCRIPTION_PAR_1:
    "Upload existing images/datasets and continue working on them in LabelPal.",
  UPLOAD_DATASETS_MODAL_DESCRIPTION_PAR_2:
    "It is important to note that everything you upload will never leave the privacy of your computer.",
  UPLOAD_DATASETS_MODAL_REUSE_IMAGES: "Reuse already uploaded Images?",
  ANNOTATIONS: "Annotations",
  ONE_ANNOTATION_FILE_ALLOWED_ERROR_MESSAGE:
    "Only one annotation file is allowed per dataset (app version 1.0)",
  ONE_CLASSES_FILE_ALLOWED_ERROR_MESSAGE:
    "Only one classes file is allowed per dataset (app version 1.0)",
  BOUNDING_BOXES_ONLY: "Bounding boxes only",
  UPLOAD_DATASETS_FORMAT_VALIDATAOR_IMAGE_NOT_SPECIFIED:
    "This image is not specified in the annotations file(s)",
  ML_MODAL_DESCRIPTION_PAR_1:
    "You can use a pre-trained Machine Learning model to automatically annotate objects with bounding boxes!",
  ML_MODAL_DESCRIPTION_PAR_2:
    "Click 'Start' to download the 'COCO-SSD' model and use it to generate bounding boxes for your images.",
  ML_MODAL_DESCRIPTION_PAR_3:
    "In addition, because this model operates locally on the browser, your data will never leave the privacy of your computer.",
  FINISHED: "Finished!",
  ML_MODAL_ERROR: "ERROR! Something went wrong, please try again later.",
  // object does not contain any properties
  ML_SUCCESSFUL_ANNOTATION_RESULT:
    "The following names were automatically assigned to the generated objects, you can edit them below:",
  ML_NO_ANNOTATED_IMAGES_RESULT:
    "The model has not identified any objects within the uploaded images.",
  THE_FOLLOWING_SHORT: "The following ",
  ARE: " are ",
  THE_FOLLOWING_HAS_NOT_BEEN_FOUND: "The following ",
  THE_FOLLOWING_HAVE_NOT_BEEN_FOUND: "The following ",
  CONTAIN_INCORRECT_TYPE: " contain an incorrect type",
  PROPERTIES: "properties",
  ATTRIBUTES: "attributes",
  TAGS: "tag(s)",
  HAS_NOT_FOUND: " has not been found",
  HAVE_NOT_FOUND: " have not been found",
  IN_1: "in ",
  IN_2: "", // empty to help sentence structuring
  THE: "The ",
  OBJECT_NO_PROPERTIES: "object does not contain any properties",
  VGG_EQUAL_SIZE_ARRAYS:
    "all_points_x and all_points_y arrays must have equal size",
  SHAPE_NOT_SUPPORTED: "The following shape type is not supported",
  ANNOTATION_OBJECT: "annotation object",
  IMAGE_NOT_VALID_IN_ANNOTATIONS:
    "This image is not specified in any of the valid annotations file(s)",
  ARRAY_EMPTY: "array is empty",
  CSV_ATTRIBUTES_1: "Row ",
  CSV_ATTRIBUTES_2: " contains ",
  CSV_ATTRIBUTES_3: " attributes, but the expected number is 8",
  YOLO_ROW_1: "on row ",
  YOLO_ROW_2: "", // empty to help sentence structuring
  YOLO_CLASS_1: "This file contains a class number of ",
  YOLO_CLASS_2: "however the classes file only contains ",
  YOLO_CLASS_3: " class(es) with the first reference starting from 0",
  // array must contain / instead found are switched between chinese and english
  SHARED_ARRAY_CONTAIN: "array must contain ",
  SHARED_ELEMENTS_BUT_FOUND_AT_MOST_0: "array must contain ",
  SHARED_ELEMENTS_BUT_FOUND_1: " elements but instead found ",
  SHARED_ELEMENTS_BUT_FOUND_AT_MOST_1: " elements at most but instead found ",
  SHARED_ELEMENTS_BUT_FOUND_2: "", // empty to help sentence structuring
  SHARED_ARRAY_CONTAIN_AT_LEAST: "array must contain at least ",
  SHARED_EVEN_NUMBER_OF_ELEMENTS_1:
    "array must contain an even number of elements but instead found ",
  SHARED_ELEMENTS_INCORRECT_TYPE: "array contains elements of incorrect type",
  INVALID: "Invalid",
  TXT_FILE_EMPTY: "Text file is empty",
  TXT_FILE_INVALID: "Invalid text file",
  DIFFERENT_TABLE_INFO:
    "If this file belongs in the annotations table, make sure that each row contains exactly 5 attributes: class x y width height",
};
