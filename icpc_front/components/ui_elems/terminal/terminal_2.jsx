'use client'
import { useState, useRef, useEffect } from "react"
import Image from "next/image";

const COMMANDS = {
  '--help': 'Available commands:\n--help: Show this help message\nclear: Clear the terminal\necho [text]: Display text\nversion: Show terminal version',
  'clear': '',
  'version': 'Terminal v1.0.0',
  'echo': (args) => args.join(' ')
};

export default function Terminal() {
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState([0, 0]);
  const [position, setPosition] = useState({ left: 100, top: 100 });
  const [input, setInput] = useState('');
  const [history, setHistory] = useState(['Welcome to Terminal v1.0.0\nType --help for available commands']);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  
  const ref = useRef(null);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd) => {
    const args = cmd.trim().split(' ');
    const command = args[0].toLowerCase();
    const commandArgs = args.slice(1);

    let output = '';
    
    if (command in COMMANDS) {
      if (typeof COMMANDS[command] === 'function') {
        output = COMMANDS[command](commandArgs);
      } else {
        output = COMMANDS[command];
      }
    } else if (command) {
      output = `Command not found: ${command}. Type --help for available commands.`;
    }

    if (command === 'clear') {
      setHistory([]);
    } else {
      setHistory(prev => [...prev, `test@test$ ${cmd}`, output].filter(Boolean));
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setCommandHistory(prev => [...prev, input]);
      setHistoryIndex(-1);
      setInput('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  const handleMouseDown = (e) => {
    if (e.target === ref.current) {
      setIsDragging(true);
      setOffset([position.left - e.clientX, position.top - e.clientY]);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPosition({
        left: e.clientX + offset[0],
        top: e.clientY + offset[1],
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, offset]);

  const toggleTerminal = () => {
    setIsOpen(prev => !prev);
    if (!isOpen) {
      setPosition({ left: window.innerWidth / 4, top: scrollY+window.innerHeight / 4 });
    }
  };

  return (
    <>
      <button 
        onClick={toggleTerminal}
        className="fixed z-50 bottom-0 right-0 bg-blue-500 hover:bg-blue-600 text-white rounded-full w-[5vw] h-[5vw] flex justify-center items-center m-[1vw] hover:scale-110 transition-all duration-300 ease-in-out shadow-lg"
        aria-label="Toggle Terminal"
      >
        <Image src="/terminal_black.png" width={1} height={1} className="h-[4vw] w-auto" unoptimized></Image>
      </button>

      {isOpen && (
        <div 
          className="absolute z-20 bg-black min-w-[35vw] min-h-[20vw] rounded-[1vw] overflow-hidden flex flex-col shadow-lg animate-fade-in"
          style={{ 
            left: position.left + "px", 
            top: position.top + "px",
          }}
        >
          <div 
            ref={ref}
            className="min-h-[2vw] bg-gray-700 w-full flex justify-between items-center cursor-move"
            onMouseDown={handleMouseDown}
          >
            <div className="flex items-center">
              <div className="rounded-full ml-[0.5vw] bg-red-500 min-h-[1vw] min-w-[1vw] cursor-pointer hover:bg-red-600" onClick={toggleTerminal} />
              <div className="rounded-full ml-[0.2vw] bg-yellow-500 min-h-[1vw] min-w-[1vw]" />
              <div className="rounded-full ml-[0.2vw] bg-green-500 min-h-[1vw] min-w-[1vw]" />
            </div>
            <div className="text-xs text-gray-300 mr-2">Terminal v1.0.0</div>
          </div>
          
          <div ref={outputRef} className="flex-1 overflow-y-auto p-2 font-mono text-green-400">
            {history.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap">{line}</div>
            ))}
          </div>

          <div className="flex px-2 py-1 font-mono text-green-400 border-t border-gray-700">
            <span>test@test$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent outline-none ml-1"
              autoFocus
            />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
}