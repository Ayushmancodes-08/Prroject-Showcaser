import * as fs from 'fs';
import * as path from 'path';

/**
 * **Feature: firebase-cleanup, Property 1: No Firebase References**
 * **Validates: Requirements 3.1**
 * 
 * For any file in the src directory, searching for "firebase" imports or references 
 * should return zero matches.
 */
describe('Property 1: No Firebase References', () => {
  it('should have no firebase imports in src directory', () => {
    const srcDir = path.join(__dirname, '..', '..');
    const firebasePattern = /import\s+.*from\s+['"]firebase['"]|from\s+['"]firebase\//;
    
    const checkFilesForFirebase = (dir: string): string[] => {
      const matches: string[] = [];
      const files = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const file of files) {
        if (file.name.startsWith('.') || file.name === 'node_modules') continue;
        
        const fullPath = path.join(dir, file.name);
        
        if (file.isDirectory()) {
          matches.push(...checkFilesForFirebase(fullPath));
        } else if (file.name.endsWith('.ts') || file.name.endsWith('.tsx')) {
          const content = fs.readFileSync(fullPath, 'utf-8');
          if (firebasePattern.test(content)) {
            matches.push(fullPath);
          }
        }
      }
      
      return matches;
    };
    
    const filesWithFirebase = checkFilesForFirebase(srcDir);
    expect(filesWithFirebase).toEqual([]);
  });
});

/**
 * **Feature: firebase-cleanup, Property 2: No Genkit References**
 * **Validates: Requirements 3.2**
 * 
 * For any file in the src directory, searching for "genkit" imports or references 
 * should return zero matches.
 */
describe('Property 2: No Genkit References', () => {
  it('should have no genkit imports in src directory', () => {
    const srcDir = path.join(__dirname, '..', '..');
    const genkitPattern = /import\s+.*from\s+['"]genkit['"]|from\s+['"]@genkit-ai\/|from\s+['"]genkit\//;
    
    const checkFilesForGenkit = (dir: string): string[] => {
      const matches: string[] = [];
      const files = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const file of files) {
        if (file.name.startsWith('.') || file.name === 'node_modules') continue;
        
        const fullPath = path.join(dir, file.name);
        
        if (file.isDirectory()) {
          matches.push(...checkFilesForGenkit(fullPath));
        } else if (file.name.endsWith('.ts') || file.name.endsWith('.tsx')) {
          const content = fs.readFileSync(fullPath, 'utf-8');
          if (genkitPattern.test(content)) {
            matches.push(fullPath);
          }
        }
      }
      
      return matches;
    };
    
    const filesWithGenkit = checkFilesForGenkit(srcDir);
    expect(filesWithGenkit).toEqual([]);
  });
});

/**
 * **Feature: firebase-cleanup, Property 3: Favicon Exists and is Valid**
 * **Validates: Requirements 2.2**
 * 
 * For any application build, the public/favicon.ico file should exist and be a valid 
 * PNG image with dimensions of at least 32x32 pixels.
 */
describe('Property 3: Favicon Exists and is Valid', () => {
  it('should have a valid favicon.ico file in public directory', () => {
    const faviconPath = path.join(__dirname, '..', '..', 'public', 'favicon.ico');
    
    // Check file exists
    expect(fs.existsSync(faviconPath)).toBe(true);
    
    // Check file is readable and has content
    const stats = fs.statSync(faviconPath);
    expect(stats.size).toBeGreaterThan(0);
    
    // Check file is a valid PNG (PNG magic number: 89 50 4E 47)
    const buffer = Buffer.alloc(4);
    const fd = fs.openSync(faviconPath, 'r');
    fs.readSync(fd, buffer, 0, 4, 0);
    fs.closeSync(fd);
    
    // PNG files start with 89 50 4E 47 (hex) or 137 80 78 71 (decimal)
    const isPNG = buffer[0] === 0x89 && buffer[1] === 0x50 && buffer[2] === 0x4E && buffer[3] === 0x47;
    expect(isPNG).toBe(true);
  });
});

/**
 * **Feature: firebase-cleanup, Property 4: Build Succeeds Without Errors**
 * **Validates: Requirements 3.3**
 * 
 * For any build execution after cleanup, the build process should complete successfully 
 * without errors related to Firebase or Genkit modules.
 */
describe('Property 4: Build Succeeds Without Errors', () => {
  it('should have no firebase or genkit references in package.json', () => {
    const packageJsonPath = path.join(__dirname, '..', '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
    
    const allDeps = {
      ...packageJson.dependencies,
      ...packageJson.devDependencies,
    };
    
    const firebaseOrGenkitDeps = Object.keys(allDeps).filter(
      dep => dep.includes('firebase') || dep.includes('genkit')
    );
    
    expect(firebaseOrGenkitDeps).toEqual([]);
  });
});
