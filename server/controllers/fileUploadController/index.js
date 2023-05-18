exports.fileValidation = async (req, res, next) => { 
  try {
    if (!req.file) {
      return res.status(400).json('No file uploaded');
    }
    const allowedTypes = ['image/jpeg','image/jpg', 'image/png', 'image/gif','application/octet-stream'];
    if (!allowedTypes.includes(req.file.mimetype)) {
      return res.status(400).json('Only image files are allowed');
    }
    const maxSize = 1000000 ; // 1MB in bytes
    if (req.file.size > maxSize) {
      return res.status(400).json('File size must be less than 1GB');
    }
    next();
  } catch (error) {
    next(error);
  }
}

exports.uploadFile = async (req, res, next) => { 
    try {
        res.status(200).json({
            success: true,
            url: `${req.protocol}://${req.headers.host}/uploads/${req.file.filename}`
        });
    } catch (error) {
        next(error);
    }
}