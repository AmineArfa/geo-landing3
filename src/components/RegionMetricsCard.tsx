import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import type { RegionData } from './MapLibreMap';

interface RegionMetricsCardProps {
  region: RegionData | null;
  position?: { x: number; y: number };
  isVisible: boolean;
}

export function RegionMetricsCard({ region, position, isVisible }: RegionMetricsCardProps) {
  const [cardPosition, setCardPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (position) {
      setCardPosition(position);
    }
  }, [position]);

  if (!region || !isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && region && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ 
            duration: 0.4, 
            ease: [0.16, 1, 0.3, 1],
            type: "spring",
            stiffness: 300,
            damping: 25
          }}
          className="absolute z-50 pointer-events-none"
          style={{
            left: cardPosition?.x ? `${cardPosition.x}px` : '50%',
            top: cardPosition?.y ? `${cardPosition.y}px` : '50%',
            transform: cardPosition ? 'translate(-50%, calc(-100% - 16px))' : 'translate(-50%, -50%)',
          }}
        >
          {/* Modern Elegant Card */}
          <div className="relative bg-white/98 backdrop-blur-2xl border border-gray-200/80 rounded-2xl shadow-2xl overflow-hidden min-w-[280px] max-w-[340px]">
            {/* Gradient accent top */}
            <div 
              className="absolute top-0 left-0 right-0 h-1"
              style={{ 
                background: `linear-gradient(90deg, ${region.hexColor}00, ${region.hexColor}, ${region.hexColor}00)`
              }}
            />
            
            {/* Decorative glow */}
            <div 
              className="absolute -inset-2 opacity-20 blur-xl pointer-events-none"
              style={{ 
                background: `radial-gradient(circle, ${region.hexColor}40, transparent 70%)`
              }}
            />
            
            {/* Content */}
            <div className="relative p-5 space-y-4">
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <div 
                    className="w-2.5 h-2.5 rounded-full shadow-sm"
                    style={{ backgroundColor: region.hexColor }}
                  />
                  <h3 className="text-lg font-bold text-gray-900">
                    {region.name}
                  </h3>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {region.insights}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100/80">
                <div className="text-center">
                  <div className="text-[10px] text-gray-500 mb-1.5 font-medium uppercase tracking-wider">Sentiment</div>
                  <div 
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: region.hexColor }}
                  >
                    {region.sentiment}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] text-gray-500 mb-1.5 font-medium uppercase tracking-wider">Ranking</div>
                  <div className="text-2xl font-bold tracking-tight text-gray-900">
                    {region.llmRanking}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] text-gray-500 mb-1.5 font-medium uppercase tracking-wider">Mentions</div>
                  <div className="text-2xl font-bold tracking-tight text-gray-900">
                    {region.aiMentions}
                  </div>
                </div>
              </div>

              {/* Competitors */}
              {region.competitors && region.competitors.length > 0 && (
                <div className="pt-4 border-t border-gray-100/80">
                  <div className="text-[10px] text-gray-500 mb-2 font-medium uppercase tracking-wider">Competitors</div>
                  <div className="flex flex-wrap gap-1.5">
                    {region.competitors.map((competitor, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.05 }}
                        className="px-2.5 py-1 bg-gray-50/80 border border-gray-200/60 rounded-md text-xs text-gray-700 font-medium"
                      >
                        {competitor}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Arrow pointer */}
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent"
              style={{ borderTopColor: 'rgba(255, 255, 255, 0.98)' }}
            />
            <div 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full w-0 h-0 border-l-[9px] border-r-[9px] border-t-[9px] border-transparent -z-10"
              style={{ borderTopColor: 'rgba(229, 231, 235, 0.8)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}