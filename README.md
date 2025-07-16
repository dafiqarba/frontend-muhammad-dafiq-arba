# Project Overview

## 📦 App Description

This is a simple frontend web application developed as part of a technical assessment. The app allows users to:

1. **Select a country (Negara)** from a searchable list.
2. **Select a port (Pelabuhan)** based on the selected country.
3. **Select a product/item (Barang)** based on the selected port.
4. View the **description, price, and discount** of the selected item.
5. **Edit the discount** to dynamically recalculate the total price.
6. Display the **total price** formatted in Indonesian currency.

All data is fetched from a live API and updates automatically based on user interaction.

---

## ⚙️ Features

- 🔄 Cascading dropdowns powered by real API data
- 💬 Autocomplete with label-value mapping
- 🧮 Dynamic price calculation based on discount
- 📄 Read-only description and calculated fields
- 🧑‍💻 Built with modern React and Ant Design
- ⚡ Data fetching managed by TanStack Query

---

## 🧱 Tech Stack

| Tech         | Description                       |
| ------------ | --------------------------------- |
| Nextjs       | Core FE/FullStack library         |
| TypeScript   | Type-safe JavaScript              |
| Ant Design   | UI framework for fast prototyping |
| Tailwind CSS | Utility-first CSS styling         |
| React Query  | Data fetching & caching           |

---

## 🚀 Live Demo

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** >= 18.x (recommended: LTS)
- **npm**

### Installation for Running Locally

1. Clone the repository:

   ```sh
   git clone git@github.com:dafiqarba/frontend-muhammad-dafiq-arba.git

   or

   git clone https://github.com/dafiqarba/frontend-muhammad-dafiq-arba.git
   ```

2. Navigate to the directory

   ```sh
      cd frontend-muhammad-dafiq-arba
   ```

3. Install required depedencies

   ```sh
   npm i
   ```

4. Copy env variable

   ```sh
   cp .env.example .env
   ```

5. Run Locally
   ```sh
   npm run dev
   ```
