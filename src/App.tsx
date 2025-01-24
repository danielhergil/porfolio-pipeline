import React from 'react';
import { ArrowLeftCircle, Github, CheckCircle2 } from 'lucide-react';

function App() {
  const handlePortfolioClick = () => {
    window.location.href = 'https://danihg-portfolio.vercel.app/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handlePortfolioClick}
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <ArrowLeftCircle className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </button>
            <a
              href="https://github.com/yourusername/portfolio-cicd-demo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Main Content */}
          <div className="bg-gray-800 rounded-lg p-8 shadow-xl">
            <h1 className="text-3xl font-bold mb-6">CI/CD Pipeline Demo</h1>
            
            {/* Pipeline Status */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <h2 className="text-xl font-semibold">Pipeline Successfully Executed</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">🧪 Unit Tests</h3>
                  <p className="text-green-400">✓ All tests passed successfully</p>
                  <p className="text-sm text-gray-400 mt-2">Tests verify core functionality and component rendering</p>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">🐳 Docker Build</h3>
                  <p className="text-green-400">✓ Container image built and pushed</p>
                  <p className="text-sm text-gray-400 mt-2">Application containerized for consistent deployment</p>
                </div>

                <div className="bg-gray-700 rounded-lg p-4">
                  <h3 className="font-semibold mb-2">🚀 Deployment</h3>
                  <p className="text-green-400">✓ Deployed to Render</p>
                  <p className="text-sm text-gray-400 mt-2">Application is live and accessible</p>
                </div>
              </div>
            </div>

            {/* Process Explanation */}
            <div className="bg-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4">How it Works</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>You clicked a button on my portfolio that triggered a GitHub Actions workflow</li>
                <li>The workflow ran a comprehensive suite of unit tests to ensure code quality</li>
                <li>After successful tests, a Docker image was built and pushed to the registry</li>
                <li>Finally, the application was automatically deployed to Render as a web service</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;