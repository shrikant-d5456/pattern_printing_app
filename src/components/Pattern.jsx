import React, { useState } from 'react';
import { BsCopy } from 'react-icons/bs';

const getWordForChar = (c, ptrn) => {
    const space = ' ';

    switch (c.toLowerCase()) {
        case 'a':
            return `
    for(int j=1;j<=5;j++) 
    {
        if(i==1 && j<4 || j==1 )
        cout<<"${ptrn} ";
        else if(j==4)
        cout<<"${ptrn}";
        else if(i==3 && j<=4)
        cout<<"${ptrn} ";
        else
        cout<<" "<<" ";
    }
    `;
        case 'b':
            return `
     for(int j=1;j<=5;j++)
    {
        if(i==1 && j<4 )
        cout<<"${ptrn} ";
        else if(i==1 && j==4 )
        cout<<" ";
        else if(j==1)
        cout<<"${ptrn} ";
        else  if((i+j)%2==0 && j==4 )
        cout<<"${ptrn}";
        else if(i==3 && j==4 || i==5 && j==4   )
        cout<<" ";
        else if((i==5 && j<4) || (i==3 && j<4) )
        cout<<"${ptrn} ";
        else
         cout<<" "<<" ";
    }
    `;
        case 'c':
            return `
    for(int j=1;j<=4;j++)
    {
        if(i==1 && j<4)
        cout<<"${ptrn} ";
        else if(i==1 && j==4)
        cout<<" ";
        else if(i==5 && j<4)
        cout<<"${ptrn} ";
        else if(i==5 && j==4)
        cout<<" ";
        else if (j==1 )
        cout<<"${ptrn}";
        else 
         cout<<" "<<" ";
    }
    `;
        case 'd':
            return `
     for(int j=1;j<=5;j++)
    {
        if(i==1 && j<4 || j==1 )
        cout<<"${ptrn} ";
        else if (i==1 && j==4 )
        cout<<" ";
        else if(i==5 && j<4 )
        cout<<"${ptrn} ";
        else if(j==4 && (i>1 && i<5) )
        cout<<"${ptrn}";
        else if (i==5 && j==4 )
        cout<<" ";
        else
         cout<<" "<<" ";
    }
    `;
        case 'e':
            return `
    for(int j=1;j<=4;j++)
    {
        if(i==1 && j<4 )
        cout<<"${ptrn} ";
        else if (j==1 && (i==2 || i==4) )
        cout<<"${ptrn}";
        else if (i==1 && j==4 )
        cout<<" ";
        else if(i==5 && j<4)
        cout<<"${ptrn} ";
        else if(i==3 && j<=2)
        cout<<"${ptrn} ";
        else if (i==3 && j==4 )
        cout<<" ";
        else if (i==5 && j==4 )
        cout<<" ";
        else
         cout<<" "<<" ";
    }
    `;
        case 'f':
            return `
    for(int j=1;j<=4;j++)
    {
        if(i==1 && j<4 )
        cout<<"${ptrn} ";
        else if( j==1 && i==3 )
        cout<<"${ptrn} ";
        else if( j==1 )
        cout<<"${ptrn}";
        else if (i==1 && j==4 )
        cout<<" ";
        else if(i==3 && j==2)
        cout<<"${ptrn} ";
        else if (i==3 && j<4 )
        cout<<" ";
        else
         cout<<" "<<" ";
    }
    `;
        case 'g':
            return `
   for(int j=1;j<=5;j++)
    {
        if(i==1 && j<4 )
        cout<<"${ptrn} ";
        else if( j==1 && j<4)
        cout<<"${ptrn}";
        else if (i==1 && j==5)
        cout<<" ";
        else if(i==2 && j==4 )
         cout<<" "<<" ";
        else if(i==5  && j<4 || j==4 || (i & j ==3))
        cout<<"${ptrn} ";
        else
         cout<<" "<<" ";
    }
    `;
        case 'h':
            return `
    for(int j=1;j<=5;j++)
    {
        if(j==1 || i==3 && j<5)
        cout<<"${ptrn} ";
        else if(i==3 && j==5)
        cout<<" ";
        else if(j==4)
        cout<<"${ptrn}";
        else
         cout<<" "<<" ";
    }
    `;
        case 'i':
            return `
     for(int j=1;j<=4;j++)
    {
        if(i==1 && j<4 )
        cout<<"${ptrn} ";
         else if(j==2 && i==5 )
        cout<<"${ptrn} ";
        else if(j==2 )
        cout<<"${ptrn}";
        else if(i==1 && j==4)
        cout<<" ";
        else if(i==5 && j<4)
        cout<<"${ptrn} ";
        else if(i==5 && j==4 )
        cout<<" ";
        else
         cout<<" "<<" ";
    }
    `;
        case 'j':
            return `
    for(int j=1;j<=4;j++)
    {
        if(i==1 && j<4  )
        cout<<"${ptrn} ";
        else if(i==1 && j==4)
        cout<<" ";
        else if(j==2)
        cout<<"${ptrn}";
        else if(i==4 && j==1)
        cout<<"${ptrn} ";
        else if(i==5 && j<3)
        cout<<"${ptrn} ";
        else
         cout<<" "<<" ";
    }
    `;
        case 'k':
            return `
     for(int j=1;j<=4;j++)
    {
        if(j==1 )
        cout<<"${ptrn} ";
        else if(i+j==5 || i+j==9 || i==4 && j==3)
        cout<<"${ptrn} "<<" ";
        else
         cout<<" "<<" ";
    }
    `;
        case 'l':
            return `
    for(int j=1;j<=4;j++)
    {
        if(j==1)
        cout<<"${ptrn} ";
        else if(j==4)
        cout<<" ";
        else if(i==5 && j<=3)
        cout<<"${ptrn} ";
        else
         cout<<" "<<" ";
    }
    `;
        case 'm':
            return `
     for(int j=1;j<=5;j++)
    {
        if(j==1 )
        cout<<"${ptrn} ";
        else if(j== 4)
        cout<<"${ptrn}";
        else if(i==j && j<3)
        cout<<"${ptrn} ";
        else if(i==3 && j==2)
        cout<<" ${ptrn}";
        else if(i==2 && j==3)
        cout<<"${ptrn} ";
        else
         cout<<" "<<" ";
    }
    `;
        case 'n':
            return `
    for(int j=1;j<5;j++)
    {
        if(j==1  )
        cout<<"${ptrn} ";
        else if(i==j && j<3)
        cout<<"${ptrn} ";
        else if(i==3 && j==2)
        cout<<" ${ptrn}";
        else if(i==4 && j==3)
        cout<<"${ptrn} ";
        else if(j==4)
        cout<<"${ptrn} "<<" ";
        else
         cout<<" "<<" ";
    }
    `;
        case 'o':
            return `
    for(int j=1;j<=3;j++)
    {
        if(i==1 && j==3 )
        cout<<"${ptrn} "<<" ";
        else if(i==1 || j==1 )
        cout<<"${ptrn} ";
        else if(j==3 )
        cout<<"${ptrn} "<<" ";
        else if( i==5 && j==3 )
        cout<<"${ptrn} "<<" ";
        else if(i==5)
        cout<<"${ptrn} ";
        else
         cout<<" "<<" ";
    }
    `;
        case 'p':
            return `
    for(int j=1;j<=4;j++)
    {
        if(i==1 && j<4 || j==1 )
        cout<<"${ptrn} ";
        else if(i==3 && j<4)
        cout<<"${ptrn} ";
        else if(j==4)
        cout<<" ";
        else if(i==2 && j==3)
        cout<<"${ptrn} ";
        else
         cout<<" "<<" ";
    }
    `;
        case 'q':
            return `
    for(int j=1;j<=4;j++)
    {
        if(i==1 && j<4 || j==1 )
        cout<<"${ptrn} ";
        else if(i==5 && j<4 || j==3)
        cout<<"${ptrn} ";
        else if(i==4 && j==2)
        cout<<"${ptrn} ";
        else if(i==5 && j==4)
        cout<<"${ptrn}  ";
        else if(j==4)
        cout<<" "<<" "<<" ";
        else
        cout<<" "<<" ";
        
    }
    `;
        case 'r':
            return `
    for(int j=1;j<=4;j++)
    {
        if(i==1 && j<=3 || j==1 )
        cout<<"${ptrn} ";
        
        else if(i==1 && j==4)
        cout<<"${ptrn} "<<" ";
        else if(i==3 && j<=3)
        cout<<"${ptrn} ";
        else if(i==3 && j==4)
        cout<<"${ptrn} "<<" ";
        else if(i==2 && j==4)
        cout<<"${ptrn} "<<" ";
        else if(i==4 && j==2 || i==5 && j==3)
        cout<<" "<<" ${ptrn}";
        else
         cout<<" "<<" ";
    }
    `;
        case 's':
            return `
     for(int j=1;j<=4;j++)
    {
        if(i==1 && j<4 || i==5 && j<4 )
        cout<<"${ptrn} ";
        else if(i==2 && j==1)
        cout<<"${ptrn} "<<" "<<" ";
        else if(i==3 && j<4)
        cout<<"${ptrn} ";
        else if(i==4 && j==3)
        cout<<" "<<" "<<"${ptrn} ";
        else
         cout<<" ";
    }
    `;
        case 't':
            return `
    for(int j=1; j<=4; j++)
        {
            if(i==1 && j==4)
            cout<<"${ptrn} "<<" ";
            else if(i==1)
            cout<<"${ptrn} ";
            else if(j==2)
            cout<<" ${ptrn}";
            else if(j==4)
            cout<<" "<<" "<<" ";
            else
            cout<<" "<<" ";
        }
    `;
        case 'u':
            return `
    for(int j=1;j<=5;j++)
    {
        if(j==1 || j==4)
        cout<<"${ptrn} ";
        else if(i==5 && j<=4)
        cout<<"${ptrn} ";
        else
         cout<<" "<<" ";
    }
    `;
        case 'v':
            return `
     for(int j=1; j<=4; j++)
        {
           if(i==1 && j==1 )
                cout<<"${ptrn} ";
            else if(i==1 && j==4 )
                cout<<" "<<"${ptrn} ";
            else if(i==2 && j==1 )
                cout<<" "<<"${ptrn}";
            else if(i==2 && j==3 )
                cout<<" "<<" "<<"${ptrn}"; 
            else if(i==3 && j==2)
                cout<<"${ptrn} ";
            else if(i==3 && j==3 )
                cout<<" "<<"${ptrn} ";
            else if(i==4 && j==1 )
                cout<<" "<<" "<<" "<<"${ptrn}";
            else if(i==4 && j==2 )
                cout<<"${ptrn}";
            else if(i==5 && j==2 )
                cout<<" "<<"${ptrn} ";
            else
             cout<<" "<<" ";
        }
    `;
        case 'w':
            return `
    for(int j=1; j<=5; j++)
        {
                if(j==1 || j==4)
                cout<<"${ptrn} ";
                else if(i==4 && (j==2 || j==3) )
                cout<<"${ptrn} ";
                else if(i==3 && j==2  )
                cout<<" "<<"${ptrn}";
                else if(j==5)
                cout<<" ";
                else
                 cout<<" "<<" ";
      
        }
    `;
        case 'x':
            return `
        for(int j=1; j<=4; j++)
        {
               if(i==2  && j==1 || i==3  && j==2 || i==4  && j==3 || i==2  && j==3 || i==4  && j==1 )
                cout<<"${ptrn} ";
                else if(i==1  && j==1 || i==1  && j==3 || i==5  && j==1 || i==5  && j==3  )
                cout<<"${ptrn} ";
                else if(j==4)
                cout<<" ";
               else
             cout<<" "<<" ";
      
        }
    `;
        case 'y':
            return `
    for(int j=1; j<=5; j++)
        {
                if(i==j && j<4)
                cout<<"${ptrn}";
                else if(i==1 && j==5)
                cout<<"${ptrn} "<<" ";
                else if(j==5)
                cout<<" "<<" "<<" ";
                else if(i+j==6 && i<4)
                cout<<" ${ptrn}";
                else if(j==3 && i>=3 )
                cout<<"${ptrn}";
                else
                cout<<" "<<" ";
      
        }
    `;
        case 'z':
            return `
            for(int j=1; j<=5; j++)
            {
                if(i+j==5)
                cout<<"${ptrn} ";
                else if(i==1 && j<=4 || i==5 && j<=4 )
                cout<<"${ptrn} ";
                else if(j==5)
                cout<<" ";
                else
                cout<<" "<<" ";
            }
    `;
        default:
            return `
    for(int j=1;j<=4;j++)
    {
        cout<<"${space} ";
    }
    `;
    }
};

const Pattern = () => {
    let output;
    const [text, setText] = useState('');
    const [pattern, setPattern] = useState('*');
    const [show, setShow] = useState(false);

    const handleTextChange = (e) => {
        setText(e.target.value);
        setShow(true);
    };

    const handleOnCopy = () => {
        const code = `#include<iostream>\nusing namespace std;\nint main()\n{\nfor(int i=1;i<=5;i++)\n{\n${output}\ncout<<endl;\n}\n}`;
        navigator.clipboard.writeText(code);
        alert('Code copied to clipboard!');
    };


    const generatePattern = () => {
        output = text.split('').map((char) => getWordForChar(char, pattern)).join('\n');
        return output;
    };

    return (
        <>
            <div className="w-full h-full text-black bg-opacity-95 text-white"
            >
                <div className="flex flex-col items-center justify-center"
                >
                    <hr className='border-[#007676]'/>
                    <h1 className="text-3xl mt-4 font-bold text-[#007676] "
                    >Pattern Generator
                    </h1>
                    <hr className='border-[#007676]'/>

                    <input
                        className="text-black w-3/4 mt-4 p-2 shadow-md"
                        value={text}
                        onChange={handleTextChange}
                        placeholder="Enter text here..."
                    />

                    <div className='my-4'
                    >
                        <label htmlFor="pattern" className='text-[#007676] font-bold text-md'
                        >
                            Choose Pattern :
                        </label>

                        <select id="pattern" className='text-black border border-[#007676]' onChange={(e) => setPattern(e.target.value)}
                        >
                            <option value="*">*</option>
                            <option value="#">#</option>
                            <option value="+">+</option>
                            <option value="$">$</option>
                            <option value="❣">❣</option>
                            <option value="■">■</option>
                            <option value="•">•</option>
                            {/* <option value="⁕">⁕</option> */}
                            {/* <option value="▩">▩</option> */}
                            {/* <option value="▦">▦</option> */}
                            {/* <option value="▣">▣</option> */}
                            {/* <option value="▲">▲</option> */}
                            {/* <option value="◓">◓</option> */}
                            {/* <option value="◆">◆</option> */}
                            {/* <option value="◎">◎</option> */}
                            {/* <option value="◉">◉</option> */}
                            {/* <option value="◒">◒</option> */}
                            {/* <option value="❁">❁</option> */}
                            {/* <option value="♡">♡</option> */}
                            {/* <option value="❥">❥</option> */}
                            {/* <option value="❧">❧</option> */}
                            {/* <option value="☙">☙</option> */}
                        </select>

                    </div>

                    <div className='mt-4 lg:w-3/4 w-full bg-black/80 py-2 mb-4'
                    >
                        {text.trim() === "" ?
                            (
                                <div className="w-full flex items-center px-4 mb-2 flex gap-4 font-bold"
                                >
                                    Generating Your Code
                                    <div class="dot-flashing"></div>
                                </div>
                            )
                            :
                            (
                                <div className="w-full flex justify-between px-4"
                                >
                                    <h2 className="lg:text-2xl font-bold mb-2 ">Generated Pattern</h2>
                                    <button
                                        className='bg-[#007676] h-5 text-white hover:bg-[#017676] lg:p-4 py-3 px-2  gap-2 text-sm flex items-center justify-center rounded-md'
                                        onClick={handleOnCopy}
                                    >
                                        <BsCopy />
                                        Copy Here
                                    </button>
                                </div>
                            )
                        }
                        <hr />

                        <pre className="mt-2 whitespace-pre-wrap lg:text-xl text-sm ">{generatePattern()}</pre>

                    </div>
                </div>
            </div>
</>
  )
}

export default Pattern;
