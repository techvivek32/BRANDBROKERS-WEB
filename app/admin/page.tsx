import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard - Brand Brokers",
  description: "Admin dashboard for managing Brand Brokers content.",
};

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Content Management</h2>
            <p className="text-gray-400 mb-4">Manage website content, team members, services, and more.</p>
            <p className="text-sm text-yellow-400">Coming Soon</p>
          </div>
          
          <div className="glass rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Analytics</h2>
            <p className="text-gray-400 mb-4">View website analytics and performance metrics.</p>
            <p className="text-sm text-yellow-400">Coming Soon</p>
          </div>
          
          <div className="glass rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Contact Forms</h2>
            <p className="text-gray-400 mb-4">Manage contact form submissions and inquiries.</p>
            <p className="text-sm text-yellow-400">Coming Soon</p>
          </div>
        </div>
        
        <div className="mt-12 p-6 glass rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Quick Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-sm text-gray-400">Total Contacts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-sm text-gray-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-sm text-gray-400">Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">0</div>
              <div className="text-sm text-gray-400">Talent Roster</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}