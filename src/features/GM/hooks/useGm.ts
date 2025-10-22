'use client';

import { gmDefaultTab } from "@/mocks";
import { useState } from "react";

export default function useItem() {

  const [activeTab, setActiveTab] = useState(gmDefaultTab);

  return { activeTab, setActiveTab }
}