import { X } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";

export function PdfViewer({ pdf, children }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    if (window.innerWidth < 768) {
      window.open(pdf, "_blank");
      return;
    }

    setOpen(true);
  };

  return (
    <>
      <div onClick={handleOpen}>{children}</div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="
         w-[90vw]
         max-w-none!
         h-[90vh]     
         p-0    
         bg-transparent        
         [&>button]:hidden"
        >
          <div className="relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 -right-8 z-50 cursor-pointer"
            >
              <X size={18} className="text-text" />
            </button>
            <iframe src={pdf} className="w-full h-full rounded-md" />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
