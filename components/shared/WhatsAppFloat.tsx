const whatsappUrl =
  "https://wa.me/919013103676?text=Hi%20Sutra%20Health%2C%20I%20want%20to%20know%20more%20about%20your%20lifestyle%20healthcare%20services.";

function WhatsAppMark() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className="h-[20px] w-[20px]"
      fill="none"
    >
      <circle cx="16" cy="16" r="13.5" fill="currentColor" />
      <path
        d="M11.8 10.8c.35-.38.86-.48 1.28-.25l1.55.84c.38.2.55.66.4 1.07l-.6 1.65c-.12.34-.07.72.15 1.01.63.84 1.38 1.59 2.22 2.22.29.22.67.27 1.01.15l1.65-.6c.41-.15.87.02 1.07.4l.84 1.55c.23.42.13.93-.25 1.28l-.82.76c-.48.45-1.18.62-1.82.44-1.66-.47-3.28-1.43-4.7-2.85-1.42-1.42-2.38-3.04-2.85-4.7-.18-.64-.01-1.34.44-1.82l.76-.82Z"
        fill="#fff"
      />
      <path
        d="M8.8 23.2 10 19.8"
        stroke="#fff"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sutra Health on WhatsApp"
      className="
        group fixed z-[9998]
        bottom-4 left-4
        flex h-12 w-12 items-center justify-center
        rounded-full border border-[#173F35]/10
        bg-[#FAF8F1] text-[#25B864]
        shadow-[0_10px_28px_rgba(18,63,53,0.16)]
        transition-all duration-300
        hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(18,63,53,0.20)]
        sm:bottom-5 sm:left-5
        lg:bottom-6 lg:left-auto lg:right-[166px]
        lg:h-11 lg:w-auto lg:gap-2 lg:rounded-full
        lg:px-4
      "
    >
      <WhatsAppMark />

      <span className="hidden text-[11px] font-semibold tracking-[0.01em] text-[#173F35] lg:inline">
        WhatsApp
      </span>
    </a>
  );
}
