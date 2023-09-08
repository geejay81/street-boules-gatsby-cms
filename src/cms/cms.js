import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import ContentPagePreview from './preview-templates/ContentPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', ContentPagePreview)
CMS.registerPreviewTemplate('rules', ContentPagePreview)
CMS.registerPreviewTemplate('history', ContentPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
