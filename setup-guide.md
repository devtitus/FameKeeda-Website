# Fame Keeda Networks - Setup Guide

## Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Development Environment Setup](#development-environment-setup)
- [Project Structure Overview](#project-structure-overview)
- [Configuration](#configuration)
- [Local Development](#local-development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

## Prerequisites

### System Requirements

- **Operating System**: Windows, macOS, or Linux
- **Web Server**: Apache 2.4+ or Nginx 1.18+
- **PHP**: 7.4+ (for server-side functionality)
- **Node.js**: 16.0+ (for build tools and development)
- **Git**: 2.25+ (for version control)
- **Storage**: Minimum 500MB free space

### Software Dependencies

- **Web Browser**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Code Editor**: VS Code, Sublime Text, or similar
- **Terminal/Command Prompt**: For running commands
- **FTP Client**: For file transfers (optional)

## Quick Start

### Clone the Repository

```bash
git clone https://github.com/yourusername/famekeeda-website.git
cd famekeeda-website
```

### Install Dependencies

```bash
# Install Node.js dependencies
npm install

# Install PHP dependencies (if needed)
composer install
```

### Start Development Server

```bash
# Start local development server
npm run dev

# Or use PHP built-in server
php -S localhost:8000
```

### Access the Website

Open your web browser and navigate to:
- Development: `http://localhost:8000`
- Production: `https://www.famekeeda.com`

## Development Environment Setup

### Local Web Server Setup

#### Apache Configuration

1. **Enable Required Modules**
   ```bash
   sudo a2enmod rewrite
   sudo a2enmod headers
   ```

2. **Virtual Host Configuration**
   ```apache
   <VirtualHost *:80>
       ServerName famekeeda.local
       DocumentRoot "/path/to/famekeeda-website"
       
       <Directory "/path/to/famekeeda-website">
           AllowOverride All
           Require all granted
       </Directory>
   </VirtualHost>
   ```

3. **Update Hosts File**
   ```
   127.0.0.1 famekeeda.local
   ```

#### Nginx Configuration

1. **Server Block Configuration**
   ```nginx
   server {
       listen 80;
       server_name famekeeda.local;
       root /path/to/famekeeda-website;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

### Environment Variables

Create a `.env` file in the project root:

```env
# Database Configuration
DB_HOST=localhost
DB_NAME=famekeeda
DB_USER=root
DB_PASSWORD=password

# API Keys
GOOGLE_ANALYTICS_ID=YOUR_GA_ID
FORMBRICKS_API_KEY=YOUR_FORMBRICKS_KEY

# Development Settings
DEBUG=true
CACHE=false
MINIFY=false
```

## Project Structure Overview

```
FameKeeda Website/
├── public/                    # Web-accessible files
│   ├── index.html           # Main entry point
│   ├── css/                 # Stylesheets
│   ├── js/                  # JavaScript files
│   └── images/              # Media assets
├── src/                      # Source files
│   ├── components/          # Reusable components
│   ├── utils/               # Utility functions
│   └── config/              # Configuration files
├── docs/                     # Documentation
├── tests/                    # Test files
├── node_modules/             # Node.js dependencies
├── .env                      # Environment variables
├── package.json              # Node.js configuration
├── composer.json             # PHP configuration
└── README.md                 # Project documentation
```

## Configuration

### Webflow Integration

1. **Webflow Settings**
   - Update Webflow project settings
   - Configure custom code injection
   - Set up SEO settings
   - Configure hosting settings

2. **Custom Code Integration**
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
   
   <!-- Formbricks Surveys -->
   <script src="https://forms.famekeeda.com/api/packages/website"></script>
   
   <!-- Custom CSS -->
   <link href="css/custom.css" rel="stylesheet">
   ```

### SEO Configuration

1. **Meta Tags**
   ```html
   <meta name="description" content="India's Best Influencer Marketing Agency | Fame Keeda Networks">
   <meta name="keywords" content="influencer marketing, brand campaigns, content creation">
   <meta name="author" content="Fame Keeda Networks">
   ```

2. **Structured Data**
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "LocalBusiness",
     "name": "Fame Keeda Networks",
     "url": "https://www.famekeeda.com",
     "telephone": "+91 8655734299"
   }
   </script>
   ```

## Local Development

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint

# Format code
npm run format
```

### File Watching

```bash
# Watch for changes and rebuild
npm run watch

# Hot reload development
npm run hot
```

### Asset Management

```bash
# Optimize images
npm run optimize:images

# Minify CSS
npm run minify:css

# Bundle JavaScript
npm run bundle:js
```

## Testing

### Unit Tests

```bash
# Run unit tests
npm run test:unit

# Run with coverage
npm run test:coverage

# Run specific test
npm run test -- --grep "video-controls"
```

### Integration Tests

```bash
# Run integration tests
npm run test:integration

# Run end-to-end tests
npm run test:e2e

# Run visual regression tests
npm run test:visual
```

### Performance Tests

```bash
# Run performance tests
npm run test:performance

# Test page speed
npm run test:speed

# Test accessibility
npm run test:accessibility
```

## Deployment

### Build Process

```bash
# Clean build directory
npm run clean

# Build for production
npm run build:prod

# Optimize assets
npm run optimize

# Generate sitemap
npm run sitemap
```

### Deployment Commands

```bash
# Deploy to staging
npm run deploy:staging

# Deploy to production
npm run deploy:prod

# Rollback deployment
npm run rollback
```

### Environment-specific Configuration

```bash
# Staging environment
npm run build -- --env=staging

# Production environment
npm run build -- --env=production

# Development environment
npm run build -- --env=development
```

## Troubleshooting

### Common Issues

#### 1. Build Errors

**Problem**: Build fails with JavaScript errors
**Solution**:
```bash
# Clear node_modules
rm -rf node_modules
npm install

# Check for syntax errors
npm run lint

# Update dependencies
npm update
```

#### 2. Deployment Issues

**Problem**: Deployment fails on server
**Solution**:
```bash
# Check file permissions
chmod -R 755 public/

# Verify server requirements
php -v
node -v

# Check error logs
tail -f /var/log/apache2/error.log
```

#### 3. Performance Issues

**Problem**: Slow page load times
**Solution**:
```bash
# Optimize images
npm run optimize:images

# Enable caching
npm run cache:enable

# Minify assets
npm run minify
```

#### 4. Browser Compatibility

**Problem**: Issues in specific browsers
**Solution**:
```bash
# Test in different browsers
npm run test:cross-browser

# Check for polyfills
npm run polyfill

# Update browser support
npm run update:support
```

### Debug Mode

Enable debug mode for detailed error reporting:

```bash
# Enable debug mode
export DEBUG=true
npm run dev

# Check debug logs
tail -f debug.log
```

### Performance Monitoring

```bash
# Monitor performance
npm run monitor

# Check memory usage
npm run memory

# Analyze bundle size
npm run analyze
```

## Support

For additional support and documentation:

- **Documentation**: `docs/` directory
- **Issues**: GitHub Issues
- **Community**: Stack Overflow
- **Contact**: support@famekeeda.com

---

**Last Updated**: 2026-01-30  
**Version**: 1.0.0  
**Author**: Fame Keeda Networks Team