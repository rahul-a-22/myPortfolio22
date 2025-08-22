# Photo Setup Guide

## Adding Your Photo to the Portfolio Website

To display your photo throughout the website, follow these steps:

### 1. Place Your Photo File
- Copy your photo file (`My_Photo.jpg`) to the `public` folder
- The file should be at: `public/My_Photo.jpg`

### 2. Supported Image Formats
- **Recommended**: JPG/JPEG format
- **Also supported**: PNG, WebP, GIF
- **File size**: Keep under 2MB for optimal performance

### 3. Photo Requirements
- **Resolution**: At least 800x800 pixels (higher is better)
- **Aspect ratio**: Square or close to square works best
- **Quality**: High quality, professional appearance

### 4. Where Your Photo Will Appear
- ✅ **Hero Section**: Main profile photo (circular, large)
- ✅ **About Section**: About me photo (rounded rectangle)
- ✅ **Portfolio Items**: Project showcase images
- ✅ **Blog Posts**: Article header images
- ✅ **Testimonials**: Client feedback section

### 5. If Photo Doesn't Load
- The website will automatically show placeholder icons
- Check that the file is named exactly `My_Photo.jpg`
- Ensure the file is in the `public` folder
- Refresh the browser after adding the file

### 6. Customizing Photo Display
- Edit CSS files in `src/components/` to adjust photo styling
- Modify sizes, borders, and effects as needed
- All photos use `object-fit: cover` for consistent display

### 7. Testing
- Start the development server: `npm start`
- Check all sections display your photo correctly
- Test on different screen sizes for responsiveness

## File Structure
```
Portfolio/
├── public/
│   ├── My_Photo.jpg  ← Place your photo here
│   └── index.html
├── src/
│   └── components/
└── README.md
```

## Need Help?
If you encounter any issues:
1. Check the browser console for error messages
2. Verify the file path and name
3. Ensure the file format is supported
4. Restart the development server after adding the photo
