"use client";
export default function Chatbox({ data,prompt }) {
  return (
    <div>
      
      {data && data.map((item, index) => (
        
        <div key={index} className="mb-4 p-4">
          
          {item.prompt && (
            <p className="glass1 text-right mb-4 mt-2 ml-[600px] p-2 text-[18px] ">{item.prompt}</p>
          )}
          {item.response && item.response.text && (
            <p className="glass text-left p-2 text-[18px] mr-[200px]">{item.response.text}</p>
          )}
        </div>
      ))}
    </div>
  );
}
