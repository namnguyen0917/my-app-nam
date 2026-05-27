'use client';
import Sidebar from "@/components/shared/main/Sidebar";
import { CTASection } from "@/components/shared/CTASection";

export default function BuildPage() {

    return(
        <>

            {/* Content */}
            <div className="md:col-span-2 space-y-6 order-2 md:order-none">
                <section id="overview" className="glass p-6 rounded-2xl">
                    <h2 className="text-2xl font-bold text-amber-300">Build Guides</h2>
                    <div className="mt-3 text-sm text-amber-100/80">
                    Khám phá hướng dẫn build tối ưu cho từng môn phái. Tìm hiểu cách chọn trang bị, kỹ năng và chiến lược chơi phù hợp với style của bạn.
                    </div>
                </section>

                <section id="classes" className="glass p-6 rounded-2xl">...</section>
                <section id="builds" className="glass p-6 rounded-2xl">...</section>
                <section id="quests" className="glass p-6 rounded-2xl">...</section>

                <CTASection />
            </div>

        </>
    );
}
