import { exportImages } from 'pdf-export-images';
import path from 'path';
import fs from 'fs';

async function run() {
  try {
    const images = await exportImages('logo-customer.pdf', 'public/images/customers');
    console.log('Exported', images.length, 'images');
  } catch (err) {
    console.error(err);
  }
}

run();
