import NetInfo from '@react-native-community/netinfo';
import { synchronize } from '@nozbe/watermelondb/sync';

const syncDatabase = async (database) => {
  await synchronize({
    database,
    pullChanges: async ({ lastPulledAt }) => {
      // Fetch changes from your backend
      const response = await fetch(`https://your-api.com/sync?last_pulled_at=${lastPulledAt}`);
      const { changes, timestamp } = await response.json();
      return { changes, timestamp };
    },
    pushChanges: async ({ changes }) => {
      // Send changes to your backend
      await fetch('https://your-api.com/sync', {
        method: 'POST',
        body: JSON.stringify(changes),
      });
    },
  });
};

// // Monitor network and trigger sync when online
// NetInfo.addEventListener(state => {
//   if (state.isConnected) {
//     syncDatabase(database);
//   }
// });
