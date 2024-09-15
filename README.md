# LabelPal - The Ultimate Image Annotation Tool

Welcome to **LabelPal**, your go-to tool for generating high-quality datasets for computer vision models. Whether you’re working with **COCO JSON**, **CSV**, **VGG JSON**, **VOC XML**, or **YOLO TXT**, LabelPal has got you covered with its easy-to-use interface and robust annotation features.

---

## 🚀 Features

- **Multi-format support**: Export and import annotations in COCO JSON, CSV, VGG JSON, VOC XML, and YOLO TXT formats.
- **AI-Assisted Labeling**: Use built-in AI models like `tensorflow/tfjs@2.0.1` and `tensorflow-models/coco-ssd@2.1.0` to automatically detect objects in images.
- **Manual Annotation**: Draw rectangle and polygon boundaries for precise object detection.
- **Upload/Download**: Seamlessly upload and download datasets.
- **Easy Label Correction**: Manually adjust incorrect labels after AI detection.
- **Large Dataset Handling**: Keep workflows running smoothly with efficient dataset management.

---

## 🛠️ Installation Instructions

No setup is required to run this project, open the [index.html](public/index.html) file and you are all set! However, if you want to make changes or contribute to this repository, please follow the instructions below:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/labelpal.git
   cd labelpal
   ```

2. **Install Dependencies**:
   You’ll need Node.js version 10+ and NPM version 6+ installed. Once you have that, run:
   ```bash
   npm install
   ```

3. **Running the Application**:
   Run the project in watch mode:
   ```bash
   npm run watch
   ```

---

## 🧑‍💻 Usage

1. **Upload Your Dataset**: Navigate to the upload section and add your dataset (images or annotations).
2. **Select Format**: Choose your desired annotation format.
3. **Start Labeling**: Use either manual tools (rectangle/polygon) or the AI-assisted auto-labeling.
4. **Review & Export**: Once you're satisfied with the labels, download them in your preferred format.

---

## 📝 Special Notes

- This tool is designed for **large-scale datasets**, so performance has been optimized to handle bulk uploads and annotations.
- The AI model might need **fine-tuning** for specific tasks, so we recommend testing it on smaller batches first.
- Feel free to contribute by submitting pull requests or feature requests.

---

## 📜 License

This project is licensed under the **GNU GENERAL PUBLIC LICENSE**. See the [LICENSE](LICENSE) file for details.
