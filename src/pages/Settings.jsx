import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Bell,
  Palette,
  Download,
  Upload,
  Trash2,
  Save,
  AlertTriangle
} from 'lucide-react';
import { Card, Button, Modal, ModalFooter } from '../components/common';
import { useUser } from '../contexts/UserContext';
import { useToast } from '../components/common/Toast';

const Settings = () => {
  const { profile, settings, updateSettings, updateDisplayName, exportData, importData, clearAllData } = useUser();
  const toast = useToast();

  const [displayName, setDisplayName] = useState(profile.displayName);
  const [showClearModal, setShowClearModal] = useState(false);
  const [localSettings, setLocalSettings] = useState(settings);

  const handleSaveName = () => {
    if (displayName.trim()) {
      updateDisplayName(displayName.trim());
      toast.success('Name updated successfully');
    }
  };

  const handleSettingChange = (key, value) => {
    const updated = { ...localSettings, [key]: value };
    setLocalSettings(updated);
    updateSettings(updated);
    toast.success('Settings saved');
  };

  const handleExport = () => {
    const data = exportData();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `part107-progress-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success('Progress exported successfully');
  };

  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result);
        if (importData(data)) {
          toast.success('Progress imported successfully');
          window.location.reload();
        } else {
          toast.error('Failed to import data');
        }
      } catch (error) {
        toast.error('Invalid file format');
      }
    };
    reader.readAsText(file);
  };

  const handleClearData = () => {
    clearAllData();
    setShowClearModal(false);
    toast.success('All data cleared');
    window.location.reload();
  };

  return (
    <div className="container-app py-8 max-w-2xl">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">
        Settings
      </h1>

      <div className="space-y-6">
        {/* Profile Settings */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <User className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Profile</h2>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Display Name
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="input flex-1"
                  placeholder="Enter your name"
                />
                <Button onClick={handleSaveName} icon={Save}>
                  Save
                </Button>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm font-medium text-gray-900">Current Rank</p>
                  <p className="text-sm text-gray-500">{profile.rank}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Level {profile.level}</p>
                  <p className="text-sm text-gray-500">{profile.xp} XP</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Preferences */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Palette className="w-5 h-5 text-purple-500" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Preferences</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Sound Effects</p>
                <p className="text-sm text-gray-500">Play sounds for correct/incorrect answers</p>
              </div>
              <button
                onClick={() => handleSettingChange('soundEnabled', !localSettings.soundEnabled)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  localSettings.soundEnabled ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    localSettings.soundEnabled ? 'translate-x-6' : ''
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Animations</p>
                <p className="text-sm text-gray-500">Show animations and transitions</p>
              </div>
              <button
                onClick={() => handleSettingChange('animationsEnabled', !localSettings.animationsEnabled)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  localSettings.animationsEnabled ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    localSettings.animationsEnabled ? 'translate-x-6' : ''
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">Show Hints</p>
                <p className="text-sm text-gray-500">Display hint button on questions</p>
              </div>
              <button
                onClick={() => handleSettingChange('showHints', !localSettings.showHints)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  localSettings.showHints ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    localSettings.showHints ? 'translate-x-6' : ''
                  }`}
                />
              </button>
            </div>
          </div>
        </Card>

        {/* Data Management */}
        <Card>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
              <Download className="w-5 h-5 text-green-500" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Data Management</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="text-sm font-medium text-gray-900">Export Progress</p>
                <p className="text-sm text-gray-500">Download your study data as JSON</p>
              </div>
              <Button variant="outline" size="sm" icon={Download} onClick={handleExport}>
                Export
              </Button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div>
                <p className="text-sm font-medium text-gray-900">Import Progress</p>
                <p className="text-sm text-gray-500">Restore from a backup file</p>
              </div>
              <label>
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                />
                <Button variant="outline" size="sm" icon={Upload} as="span">
                  Import
                </Button>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 bg-red-50 rounded-xl">
              <div>
                <p className="text-sm font-medium text-gray-900">Clear All Data</p>
                <p className="text-sm text-red-600">This cannot be undone!</p>
              </div>
              <Button
                variant="danger"
                size="sm"
                icon={Trash2}
                onClick={() => setShowClearModal(true)}
              >
                Clear
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Clear Data Confirmation Modal */}
      <Modal
        isOpen={showClearModal}
        onClose={() => setShowClearModal(false)}
        title="Clear All Data?"
        size="sm"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-6 h-6 text-red-500" />
          </div>
          <div>
            <p className="text-gray-900 font-medium">Are you sure?</p>
            <p className="text-sm text-gray-600 mt-1">
              This will permanently delete all your progress, achievements, and settings.
              This action cannot be undone.
            </p>
          </div>
        </div>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setShowClearModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleClearData}>
            Yes, Clear Everything
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Settings;
