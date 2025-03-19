# PDF Viewer Application

This Angular application allows users to upload or view PDF documents.

## Features

* **PDF Upload:** Users can upload PDF files by dragging and dropping them into a designated area or by selecting them from their local file system.
* **PDF Link Viewing:** Users can enter a URL to a PDF document, and the application will display it in an iframe.
* **Standalone Component:** The application is built using Angular standalone components.
* **Bootstrap Styling:** The application uses Bootstrap for responsive and consistent styling.
* **Server-Side Proxy:** The application uses a Node.js server-side proxy to bypass security restrictions when viewing external PDFs in an iframe.

## Getting Started

### Prerequisites

* Node.js and npm installed
* Angular CLI installed (`npm install -g @angular/cli`)

### Local Setup

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd <your-repository-directory>
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the Angular application:**

    ```bash
    ng serve --open
    ```

4.  **Run the Backend Proxy:**
    * Navigate to the directory containing `server.js` (or your chosen backend script).
    * Run the backend server:

    ```bash
    node server.js
    ```

    * Ensure that the backend is running on the correct port (default: 3000).

## Running the Application

1.  **Start the Angular development server:**

    ```bash
    ng serve --open
    ```

2.  **Start the Node.js backend proxy:**

    ```bash
    node server.js
    ```

3.  **Open your browser** to `http://localhost:4200` (or the port specified by `ng serve`).

4.  **Upload a PDF:**
    * Drag and drop a PDF file into the drop area or click to select a file.
    * Click "Upload PDF" to send the file to your backend (replace `'YOUR_BACKEND_ENDPOINT'` in `pdf-viewer.component.ts`).

5.  **View a PDF from a link:**
    * Enter a PDF URL in the input field.
    * The PDF will be displayed in the iframe.

## Backend (Node.js Proxy)

* The application includes a Node.js backend (`server.js`) that acts as a proxy for external PDF URLs.
* This is necessary to bypass security restrictions when embedding external PDFs in an iframe.
* The backend uses `express` and `axios` to fetch and serve the PDF.

## Important Notes

* Replace `'YOUR_BACKEND_ENDPOINT'` in `pdf-viewer.component.ts` with your actual backend URL for file uploads.
* Be cautious when embedding external PDFs. Sanitize and validate URLs to prevent security vulnerabilities.
* For production deployments, consider using a more robust backend solution and secure your backend endpoints.
* If you are using a different backend language, you will need to create the proxy endpoint in that language.