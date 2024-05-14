import 'server-only';
import { cache } from 'react';

import { auth } from './auth.lib';

export const getSession = cache(auth);
