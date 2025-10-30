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
      whileHover={!isExpanded ? { scale: 1.03, y: -4 } : {}}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      layout
      className={`relative bg-white/98 backdrop-blur-sm border rounded-xl cursor-pointer transition-all duration-300 overflow-hidden ${
        isSelected 
          ? 'border-gray-900 shadow-xl ring-2 ring-gray-900/10' 
          : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
      }`}
    >
      {/* Accent indicator */}
      <motion.div 
        layout
        className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
        style={{ backgroundColor: region.hexColor }}
        animate={{ height: isSelected ? '4px' : '4px' }}
      />
      
      <motion.div 
        layout
        className="p-3 space-y-2.5"
      >
        {/* Header - Always visible */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: region.hexColor }}
            />
            <h3 className="text-sm font-bold text-gray-900">{region.name}</h3>
          </div>
          <motion.div 
            className="text-xs text-gray-400"
            animate={{ rotate: isSelected ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {region.trend === 'up' ? '↑' : '→'}
          </motion.div>
        </div>

        {/* Compact Metrics - Always visible */}
        <div className="grid grid-cols-3 gap-2">
          <div className="text-center">
            <div className="text-[9px] text-gray-500 mb-0.5 font-medium">Sentiment</div>
            <div 
              className="text-base font-bold"
              style={{ color: region.hexColor }}
            >
              {region.sentiment}
            </div>
          </div>
          <div className="text-center">
            <div className="text-[9px] text-gray-500 mb-0.5 font-medium">Rank</div>
            <div className="text-base font-bold text-gray-900">
              {region.llmRanking}
            </div>
          </div>
          <div className="text-center">
            <div className="text-[9px] text-gray-500 mb-0.5 font-medium">Mentions</div>
            <div className="text-base font-bold text-gray-900">
              {region.aiMentions}
            </div>
          </div>
        </div>

        {/* Expanded Details - Only shown when selected */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-3 pt-3 border-t border-gray-100">
                {/* Insights */}
                {region.insights && (
                  <div>
                    <div className="text-[9px] text-gray-500 mb-1 font-medium uppercase tracking-wider">
                      Insights
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {region.insights}
                    </p>
                  </div>
                )}

                {/* Competitors */}
                {region.competitors && region.competitors.length > 0 && (
                  <div>
                    <div className="text-[9px] text-gray-500 mb-1.5 font-medium uppercase tracking-wider">
                      Competitors
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {region.competitors.map((comp, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.03 }}
                          className="px-2 py-0.5 bg-gray-50 border border-gray-200 rounded text-[10px] font-medium text-gray-700"
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
    <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 z-40 pointer-events-none px-1 sm:px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1.5 sm:gap-2 md:gap-3 pointer-events-auto max-h-[50vh] sm:max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {regions.map((region, index) => (
          <motion.div
            key={region.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
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