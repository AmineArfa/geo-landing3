import { motion, AnimatePresence } from 'framer-motion';
import type { RegionData } from './MapLibreMap';

interface Region extends RegionData {
  trend: 'up' | 'stable';
  competitors: string[];
}

interface FlatRegionCardProps {
  region: Region;
  isSelected: boolean;
  isExpanded: boolean;
  onClick: () => void;
}

function FlatRegionCard({ region, isSelected, isExpanded, onClick }: FlatRegionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={!isExpanded ? { scale: 1.02, y: -2 } : {}}
      whileTap={{ scale: 0.97 }}
      onClick={onClick}
      layout
      className={`relative bg-white/98 backdrop-blur-sm border rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 overflow-hidden touch-manipulation ${
        isSelected
          ? 'border-gray-900 shadow-lg sm:shadow-xl ring-2 ring-gray-900/10'
          : 'border-gray-200 hover:border-gray-300 hover:shadow-md sm:hover:shadow-lg'
      }`}
    >
      {/* Accent indicator - thinner on mobile */}
      <motion.div
        layout
        className="absolute top-0 left-0 right-0 h-0.5 sm:h-1 rounded-t-lg sm:rounded-t-xl"
        style={{ backgroundColor: region.hexColor }}
        animate={{ height: isSelected ? '3px' : '2px' }}
      />

      <motion.div
        layout
        className="p-2.5 sm:p-3 space-y-2 sm:space-y-2.5"
      >
        {/* Header - Always visible - Mobile optimized */}
        <div className="flex items-center justify-between min-h-[24px]">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <div
              className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0"
              style={{ backgroundColor: region.hexColor }}
            />
            <h3 className="text-xs sm:text-sm font-bold text-gray-900 truncate">{region.name}</h3>
          </div>
          <motion.div
            className="text-xs text-gray-400 flex-shrink-0 ml-2"
            animate={{ rotate: isSelected ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {region.trend === 'up' ? '↑' : '→'}
          </motion.div>
        </div>

        {/* Compact Metrics - Always visible - Mobile-First: Smaller on mobile */}
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          <div className="text-center min-w-0">
            <div className="text-[8px] sm:text-[9px] text-gray-500 mb-0.5 font-medium uppercase tracking-wide">Sentiment</div>
            <div
              className="text-sm sm:text-base font-bold truncate"
              style={{ color: region.hexColor }}
            >
              {region.sentiment}
            </div>
          </div>
          <div className="text-center min-w-0">
            <div className="text-[8px] sm:text-[9px] text-gray-500 mb-0.5 font-medium uppercase tracking-wide">Rank</div>
            <div className="text-sm sm:text-base font-bold text-gray-900 truncate">
              {region.llmRanking}
            </div>
          </div>
          <div className="text-center min-w-0">
            <div className="text-[8px] sm:text-[9px] text-gray-500 mb-0.5 font-medium uppercase tracking-wide">Mentions</div>
            <div className="text-sm sm:text-base font-bold text-gray-900 truncate">
              {region.aiMentions}
            </div>
          </div>
        </div>

        {/* Expanded Details - Only shown when selected - Mobile optimized */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-2 sm:space-y-3 pt-2 sm:pt-3 border-t border-gray-100">
                {/* Insights */}
                {region.insights && (
                  <div>
                    <div className="text-[8px] sm:text-[9px] text-gray-500 mb-1 font-medium uppercase tracking-wider">
                      Insights
                    </div>
                    <p className="text-[10px] sm:text-xs text-gray-600 leading-relaxed">
                      {region.insights}
                    </p>
                  </div>
                )}

                {/* Competitors - Limited on mobile */}
                {region.competitors && region.competitors.length > 0 && (
                  <div>
                    <div className="text-[8px] sm:text-[9px] text-gray-500 mb-1 sm:mb-1.5 font-medium uppercase tracking-wider">
                      Competitors
                    </div>
                    <div className="flex flex-wrap gap-1 sm:gap-1.5">
                      {region.competitors.slice(0, 4).map((comp, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.03 }}
                          className="px-1.5 py-0.5 sm:px-2 sm:py-0.5 bg-gray-50 border border-gray-200 rounded text-[9px] sm:text-[10px] font-medium text-gray-700"
                        >
                          {comp}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

interface FlatRegionMetricsProps {
  regions: Region[];
  selectedRegionId: string | null;
  onRegionClick: (regionId: string) => void;
}

export function FlatRegionMetrics({ regions, selectedRegionId, onRegionClick }: FlatRegionMetricsProps) {
  return (
    <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 md:bottom-4 md:left-4 md:right-4 z-40 pointer-events-none">
      {/* Mobile-First Grid: Stack on mobile, columns on larger screens */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1.5 sm:gap-2 md:gap-2.5 pointer-events-auto max-h-[45vh] xs:max-h-[50vh] sm:max-h-[55vh] md:max-h-[60vh] overflow-y-auto overscroll-contain scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400">
        {regions.map((region, index) => (
          <motion.div
            key={region.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            layout
          >
            <FlatRegionCard
              region={region}
              isSelected={selectedRegionId === region.id}
              isExpanded={selectedRegionId === region.id}
              onClick={() => onRegionClick(region.id)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}