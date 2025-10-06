// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        colors: {
          // Brand
          primary: "#2563EB",   // blue-600
          accent: "#7C3AED",    // violet-600
  
          // Backgrounds & Surfaces
          background: {
            primary: "#F9FAFB", // gray-50
            dark: "#111827",    // gray-900
          },
          
          surface: {
            primary: "#FFFFFF", // white
            dark: "#1F2937",    // gray-800
          },
  
          // Text
          text: {
            primary: "#111827",   // gray-900
            secondary: "#6B7280", // gray-500
            muted: "#9CA3AF",     // gray-400
            onPrimary: "#FFFFFF", // white on primary buttons
          },
  
          // Status
          status: {
            open: "#3B82F6",       // blue-500
            inprogress: "#F59E0B", // amber-500
            done: "#10B981",       // emerald-500
            blocked: "#EF4444",    // red-500
          },
  
          // Source Colors
          source: {
            jira: "#0052CC",
            github: "#181717",
            notion: "#000000",
          },
  
          // Borders / Dividers
          border: {
            light: "#E5E7EB",  // gray-200
            dark: "#374151",   // gray-700
          },
        },
      },
    },
  };
  