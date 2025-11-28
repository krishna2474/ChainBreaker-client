import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import Button from "./ui/Button";
import ComingSoonModal from "./ui/ComingSoonModal";

const CTA = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Protect Your Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join 150+ groups using ChainBreaker to combat misinformation in
            real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="glow"
              icon={MessageCircle}
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => setModalOpen(true)}
            >
              Add to WhatsApp
            </Button>
            <Button
              variant="glow"
              icon={Send}
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Add to Telegram
            </Button>
          </div>
        </div>
      </section>
      <ComingSoonModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        feature="WhatsApp"
      />
    </>
  );
};

export default CTA;
