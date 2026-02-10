/**
 * Navbar – Minimal top bar with sidebar toggle and settings
 * 
 * Features:
 *  • Sidebar toggle icon on the left
 *  • Settings icon on the right
 *  • Settings modal popup
 */

import { memo, useState } from "react";
import { SettingsIcon, XIcon } from "../UI/icons";

interface NavbarProps {
    isSidebarOpen: boolean;
    onSidebarToggle: () => void;
    voices: SpeechSynthesisVoice[];
    selectedVoiceName: string;
    rate: number;
    onVoiceChange: (voice: SpeechSynthesisVoice) => void;
    onRateChange: (rate: number) => void;
}

// Avatar options
const DEFAULT_AVATAR = "/avatar.jpg";
const AVATAR_OPTIONS = [
    { id: "default", name: "Default", url: DEFAULT_AVATAR },
    { id: "female1", name: "Female 1", url: "/avatars/female1.png" },
    { id: "male1", name: "Male 1", url: "/avatars/male1.png" },
    { id: "robot", name: "Robot", url: "/avatars/robot.png" },
];

// Sidebar Toggle Icon
const SidebarIcon = ({ size = 18 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
    </svg>
);

export const Navbar = memo(function Navbar({
    isSidebarOpen,
    onSidebarToggle,
    voices,
    selectedVoiceName,
    rate,
    onVoiceChange,
    onRateChange,
}: NavbarProps) {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState<"voice" | "avatar" | "general">("voice");
    const [selectedAvatar, setSelectedAvatar] = useState("default");

    const tabs = [
        { id: "voice" as const, label: "Voice" },
        { id: "avatar" as const, label: "Avatar" },
        { id: "general" as const, label: "General" },
    ];

    return (
        <>
            {/* Top Bar - Only toggle and settings */}
            <div className={`
                fixed top-0 right-0 z-45
                flex items-center justify-between
                h-12 px-4
                bg-surface-950/80 backdrop-blur-md
                border-b border-white/5
                transition-all duration-300
                ${isSidebarOpen ? "left-64" : "left-0"}
            `}>
                <button
                    type="button"
                    onClick={onSidebarToggle}
                    aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
                    className="
                        p-2 rounded-lg
                        text-white/60 hover:text-white hover:bg-white/5
                        transition-all duration-200
                    "
                >
                    <SidebarIcon size={20} />
                </button>

                {/* Settings Button */}
                <button
                    type="button"
                    onClick={() => setIsSettingsOpen(true)}
                    aria-label="Open settings"
                    className="
                        p-2 rounded-lg
                        text-white/60 hover:text-white hover:bg-white/5
                        transition-all duration-200
                    "
                >
                    <SettingsIcon size={20} />
                </button>
            </div>

            {/* Settings Modal */}
            {isSettingsOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
                        onClick={() => setIsSettingsOpen(false)}
                    />

                    {/* Modal */}
                    <div className="
                        relative z-10
                        w-full max-w-lg
                        max-h-[85vh]
                        bg-surface-900/95 backdrop-blur-xl
                        rounded-2xl
                        border border-white/10
                        shadow-2xl
                        overflow-hidden
                        animate-scale-in
                    ">
                        {/* Header */}
                        <div className="flex items-center justify-between p-5 border-b border-white/10">
                            <h2 className="text-xl font-semibold text-white">Settings</h2>
                            <button
                                type="button"
                                onClick={() => setIsSettingsOpen(false)}
                                aria-label="Close settings"
                                className="
                                    p-2 rounded-lg
                                    bg-white/5 hover:bg-white/10
                                    text-white/70 hover:text-white
                                    transition-colors
                                "
                            >
                                <XIcon size={20} />
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="flex border-b border-white/10">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    type="button"
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`
                                        flex-1 py-3 px-4
                                        text-sm font-medium
                                        transition-all duration-200
                                        ${activeTab === tab.id
                                            ? "text-accent border-b-2 border-accent bg-white/5"
                                            : "text-white/60 hover:text-white hover:bg-white/5"
                                        }
                                    `}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>

                        {/* Content - Scrollable */}
                        <div className="p-5 overflow-y-auto max-h-[calc(85vh-140px)]">
                            {/* Voice Tab */}
                            {activeTab === "voice" && (
                                <div className="space-y-6 animate-fade-in">
                                    <div>
                                        <label className="block text-sm font-medium text-white/70 mb-3">
                                            Voice
                                        </label>
                                        <select
                                            value={selectedVoiceName}
                                            onChange={(e) => {
                                                const voice = voices.find((v) => v.name === e.target.value);
                                                if (voice) onVoiceChange(voice);
                                            }}
                                            className="
                                                w-full px-4 py-3 rounded-xl
                                                bg-white/5 border border-white/10
                                                text-white text-sm
                                                focus:outline-none focus:ring-2 focus:ring-accent/50
                                                cursor-pointer
                                            "
                                        >
                                            {voices.map((v) => (
                                                <option key={v.name} value={v.name} className="bg-surface-900">
                                                    {v.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white/70 mb-3">
                                            Speech Speed: {rate.toFixed(1)}x
                                        </label>
                                        <input
                                            type="range"
                                            min="0.5"
                                            max="2"
                                            step="0.1"
                                            value={rate}
                                            onChange={(e) => onRateChange(parseFloat(e.target.value))}
                                            className="
                                                w-full h-2 rounded-full
                                                bg-white/10 
                                                accent-accent
                                                cursor-pointer
                                            "
                                        />
                                        <div className="flex justify-between text-xs text-white/50 mt-2">
                                            <span>0.5x</span>
                                            <span>1.0x</span>
                                            <span>2.0x</span>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Avatar Tab */}
                            {activeTab === "avatar" && (
                                <div className="space-y-4 animate-fade-in">
                                    <label className="block text-sm font-medium text-white/70 mb-3">
                                        Choose Avatar
                                    </label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {AVATAR_OPTIONS.map((avatar) => (
                                            <button
                                                key={avatar.id}
                                                type="button"
                                                onClick={() => setSelectedAvatar(avatar.id)}
                                                className={`
                                                    p-4 rounded-xl
                                                    flex flex-col items-center gap-3
                                                    border-2 transition-all duration-200
                                                    ${selectedAvatar === avatar.id
                                                        ? "border-accent bg-accent/10"
                                                        : "border-white/10 bg-white/5 hover:border-white/20"
                                                    }
                                                `}
                                            >
                                                <div className="w-16 h-16 rounded-full bg-surface-800 overflow-hidden">
                                                    <img
                                                        src={avatar.url}
                                                        alt={avatar.name}
                                                        className="w-full h-full object-cover"
                                                        onError={(e) => {
                                                            (e.target as HTMLImageElement).src = DEFAULT_AVATAR;
                                                        }}
                                                    />
                                                </div>
                                                <span className="text-sm text-white/80">{avatar.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                    <p className="text-xs text-white/40 mt-4">
                                        More avatars coming soon!
                                    </p>
                                </div>
                            )}

                            {/* General Tab */}
                            {activeTab === "general" && (
                                <div className="space-y-6 animate-fade-in">
                                    <div>
                                        <label className="block text-sm font-medium text-white/70 mb-3">
                                            Theme
                                        </label>
                                        <div className="flex gap-3">
                                            <button className="
                                                flex-1 py-3 px-4 rounded-xl
                                                bg-surface-950 border-2 border-accent
                                                text-white text-sm font-medium
                                            ">
                                                Dark
                                            </button>
                                            <button className="
                                                flex-1 py-3 px-4 rounded-xl
                                                bg-white/5 border border-white/10
                                                text-white/60 text-sm
                                                cursor-not-allowed opacity-50
                                            " disabled>
                                                Light (Soon)
                                            </button>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-white/70 mb-3">
                                            Language
                                        </label>
                                        <select className="
                                            w-full px-4 py-3 rounded-xl
                                            bg-white/5 border border-white/10
                                            text-white text-sm
                                            focus:outline-none focus:ring-2 focus:ring-accent/50
                                            cursor-pointer
                                        ">
                                            <option value="en" className="bg-surface-900">English</option>
                                            <option value="es" className="bg-surface-900">Spanish (Soon)</option>
                                        </select>
                                    </div>

                                    <div className="pt-4 border-t border-white/10">
                                        <p className="text-xs text-white/40">
                                            EchoAI v1.0.0<br />
                                            Built with React + TypeScript
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @keyframes scale-in {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
                .animate-scale-in { animation: scale-in 0.2s ease-out; }
            `}</style>
        </>
    );
});
