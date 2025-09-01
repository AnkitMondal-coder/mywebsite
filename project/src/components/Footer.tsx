import React from 'react';
import { Github, Linkedin, Mail, Heart, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.innerHTML = `
      var scriptURL = 'https://script.google.com/macros/s/AKfycbz2Jor9H-0Phkc1WRriQaCapvwYvBq-TNfFmKhZlPDR3tSozfAEXM72iZW6wiiZ8dpd/exec'
      var form = document.forms['submit-to-google-sheet']
      var msg = document.getElementById("msg")
    
      if (form) {
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message Sent Successfully!"
                setTimeout(function(){
                    msg.innerHTML = ""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })
      }
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Ankit Mondal</h3>
            <p className="text-gray-400 mb-4">
              BCA Student & Backend Developer passionate about creating innovative digital solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/AnkitMondal-coder"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/ankit-mondal-29a485245/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:ankitmondal802@gmail.com"
                className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors duration-200">About Me</a></li>
              <li><a href="/skills" className="text-gray-400 hover:text-white transition-colors duration-200">Skills</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-white transition-colors duration-200">Projects</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>ankitmondal802@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Kolkata, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            {/* Made with <Heart size={16} className="text-red-500" /> by Ankit Mondal © 2025 */}
            Developed and Maintained by Ankit Mondal © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;