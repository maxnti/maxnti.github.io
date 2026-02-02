# Max Inwood Photography Website

This is your GitHub Pages website to replace your Wix site. It's a static HTML/CSS/JavaScript site that matches the layout and features of maxinwood.com.

## 📁 File Structure

Your website should have this structure:

```
maxnti.github.io/
├── index.html                      # Homepage with 3-image hero grid
├── astrophotography-portfolio.html # Main portfolio gallery
├── the-night-sky.html             # Night sky gallery
├── usa-2025.html                  # USA 2025 gallery
├── panoramas.html                 # 360 panoramas
├── blog.html                      # Blog listing page
├── workshops.html                 # Workshops page
├── prints.html                    # Prints inquiry page
├── about.html                     # About page with bio & contact
├── css/
│   └── style.css                  # All styling
├── js/
│   └── script.js                  # Lightbox & form handling
└── images/
    ├── logo.png                   # Your watermark logo (white on transparent)
    ├── hero1.jpg                  # Homepage image 1
    ├── hero2.jpg                  # Homepage image 2
    ├── hero3.jpg                  # Homepage image 3
    ├── profile.jpg                # Your profile photo
    ├── features.png               # Featured publications logos
    ├── gallery/                   # Astrophotography portfolio images
    │   ├── astro1.jpg
    │   ├── astro2.jpg
    │   └── ...
    ├── night-sky/                 # Night sky gallery images
    ├── usa-2025/                  # USA trip images
    └── panoramas/                 # 360 panorama images
```

## 🚀 Setup Instructions

### 1. Upload Files to GitHub

1. Go to your GitHub repository: https://github.com/maxnti/maxnti.github.io
2. Click "Add file" → "Upload files"
3. Upload ALL the HTML files I created (index.html, about.html, etc.)
4. Upload the css/ folder with style.css inside it
5. Upload the js/ folder with script.js inside it
6. Commit the changes

### 2. Add Your Images

You need to add these images to your repo:

**Required Images:**

1. **logo.png** - Your white watermark logo on transparent background
   - Go to your Wix site, right-click your logo, save it
   - If it's not transparent, I can help you make it transparent
   - Upload to `/images/logo.png`

2. **hero1.jpg, hero2.jpg, hero3.jpg** - Three images for the homepage grid
   - Pick your three best images
   - Upload to `/images/` folder

3. **profile.jpg** - Your profile photo for the About page
   - The one you have on Wix (you at Kea Point)
   - Upload to `/images/profile.jpg`

4. **features.png** - The logos banner showing where you've been featured
   - Screenshot or download from your Wix site
   - Upload to `/images/features.png`

5. **Gallery images** - All your portfolio photos
   - Create folders: `images/gallery/`, `images/night-sky/`, `images/usa-2025/`, `images/panoramas/`
   - Upload your images to the appropriate folders
   - Name them clearly (astro1.jpg, astro2.jpg, etc.)

### 3. Update Image Paths

Once you've uploaded images, you'll need to update the HTML files to match your actual image filenames.

For example, in `index.html`, change:
```html
<img src="images/hero1.jpg" alt="Astrophotography by Max Inwood">
```

To match whatever you named your images.

### 4. Add More Gallery Images

In each gallery page (astrophotography-portfolio.html, the-night-sky.html, etc.), you'll see placeholder images. Just copy-paste this block for each image you want to add:

```html
<div class="gallery-item">
    <img src="images/gallery/YOUR-IMAGE-NAME.jpg" alt="Description" onclick="openLightbox(this.src)">
</div>
```

## 🎨 Customization

### Colors

To change colors, edit `css/style.css`:
- Background: `#000` (black)
- Text: `#fff` (white)
- Borders: `#333` (dark gray)
- Links/buttons: `#fff` (white)

### Fonts

Currently using Helvetica Neue. To change, update this line in `style.css`:
```css
font-family: 'Helvetica Neue', Arial, sans-serif;
```

### Contact Form

The contact forms currently just show a "sent!" message. To make them actually work, you'll need to:

1. Use a service like Formspree (free): https://formspree.io/
2. Or use EmailJS: https://www.emailjs.com/
3. Or set up Netlify Forms if you host on Netlify

For Formspree, just change the form tag to:
```html
<form action="https://formspree.io/f/YOUR-FORM-ID" method="POST">
```

## 📱 Features Included

✅ Responsive design (works on mobile)
✅ Dropdown navigation menu
✅ Image lightbox (click images to view full-size)
✅ Contact forms on About and Prints pages
✅ Multiple gallery pages
✅ Blog structure
✅ Professional styling matching your Wix site

## 🔧 Next Steps

1. **Upload all files to GitHub** - Replace your current files
2. **Add your images** - Follow the image structure above
3. **Update image filenames** - Match the HTML to your actual files
4. **Add blog posts** - Copy the blog post structure for your actual posts
5. **Set up form handling** - Use Formspree or similar
6. **Test everything** - Make sure all links work and images load

## 💡 Tips

- **Image sizes**: Optimize your images before uploading (compress them to keep site fast)
- **Filenames**: Use lowercase, no spaces (use hyphens instead)
- **Git**: You can use GitHub Desktop app to make uploading easier
- **Testing**: Always test on both desktop and mobile

## 🆘 Common Issues

**Images not showing?**
- Check the file path is correct
- Make sure images are uploaded to GitHub
- Check filename spelling (case-sensitive!)

**Navigation not working?**
- Make sure all HTML files are in the root folder
- Check file names match exactly

**Site not updating?**
- GitHub Pages can take 5-10 minutes to update
- Try clearing your browser cache

## 📞 Need Help?

If you get stuck:
1. Check the browser console for errors (F12 key)
2. Make sure all files are uploaded correctly
3. Double-check image paths match your folder structure

Good luck! Your site will look professional and won't cost anything to host on GitHub Pages! 🌟
