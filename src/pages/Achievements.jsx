import { Award, Lock } from 'lucide-react';
import { Card } from '../components/common';
import { useUser } from '../contexts/UserContext';
import { rarityColors, categoryLabels } from '../data/achievements';

const AchievementsPage = () => {
  const { getAllAchievementsWithStatus } = useUser();
  const achievements = getAllAchievementsWithStatus();

  const unlocked = achievements.filter(a => a.unlocked);
  const locked = achievements.filter(a => !a.unlocked);

  // Group by category
  const groupedLocked = locked.reduce((acc, achievement) => {
    const cat = achievement.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(achievement);
    return acc;
  }, {});

  return (
    <div className="container-app py-8">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
        Achievements
      </h1>
      <p className="text-gray-600 mb-8">
        {unlocked.length} of {achievements.length} unlocked
      </p>

      {/* Unlocked */}
      {unlocked.length > 0 && (
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Unlocked</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {unlocked.map(achievement => {
              const colors = rarityColors[achievement.rarity] || rarityColors.common;
              return (
                <Card key={achievement.id} className={`border-2 ${colors.border}`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-12 h-12 ${colors.bg} rounded-full flex items-center justify-center`}>
                      <Award className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{achievement.name}</h3>
                      <p className="text-sm text-gray-600">{achievement.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
                          {achievement.rarity}
                        </span>
                        <span className="text-xs text-amber-600">+{achievement.xpReward} XP</span>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}

      {/* Locked by Category */}
      {Object.entries(groupedLocked).map(([category, categoryAchievements]) => (
        <div key={category} className="mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {categoryLabels[category] || category}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryAchievements.map(achievement => (
              <Card key={achievement.id} className="opacity-60 border border-gray-200">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <Lock className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">{achievement.name}</h3>
                    <p className="text-sm text-gray-500">{achievement.description}</p>
                    <p className="text-xs text-gray-400 mt-2">+{achievement.xpReward} XP</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AchievementsPage;
